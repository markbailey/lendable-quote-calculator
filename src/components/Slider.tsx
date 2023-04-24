import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from '../assets/stylesheets/slider.module.scss';

type KeyboadEvent = React.KeyboardEvent | globalThis.KeyboardEvent;
type MouseEvent = React.MouseEvent | globalThis.MouseEvent;
type NotchesProps = { count: number; current: number };

export type SliderProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  value: number;
  min: number;
  max: number;
  step: number;
  notches?: boolean;
  onChange(value: number): void;
  className?: string;
};

const Notches = ({ count, current }: NotchesProps) => (
  <div>
    {Array.from({ length: count + 1 }).map((_, i) => (
      <span
        key={`notch${i}`}
        style={{ left: `${(100 / count) * i}%` }}
        className={classNames(styles.notch, i <= current && styles.highlighted)}
      />
    ))}
  </div>
);

function Slider(props: SliderProps) {
  const {
    className: classNameProp,
    value: initialValue,
    min,
    max,
    step,
    notches = false,
    onChange,
    ...otherProps
  } = props;

  const [value, setValue] = useState(initialValue);
  const mouseDownRef = useRef(false);
  const ref = useRef<HTMLDivElement>(null);
  const className = classNames(styles.slider, classNameProp);

  const notchCount = (max - min) / step;
  const currentNotch = Math.round((value - min) / step);
  const progress = Math.min(Math.max(0, (100 / notchCount) * currentNotch), 100);

  const calculateValue = (clientX: number) => {
    const { left, width } = ref.current?.getBoundingClientRect() || { left: 0, width: 0 };
    const x = Math.min(Math.max(0, clientX - left), width);
    const newValue = Math.round((x / width) * notchCount) * step + min;
    return newValue;
  };

  const onMouseMoveClick = (event: MouseEvent) => {
    if ((!mouseDownRef.current && event.type !== 'click') || value < min || value > max) return;
    const { clientX } = event;
    const newValue = calculateValue(clientX);
    setValue(newValue);
    onChange(newValue);
  };

  const onTouchMove = (event: React.TouchEvent) => {
    if (value < min || value > max) return;
    const { clientX } = event.touches[0];
    const newValue = calculateValue(clientX);
    setValue(newValue);
    onChange(newValue);
  };

  const onThumbMouseDownUp = (event: MouseEvent) => {
    event.preventDefault();
    const isDown = event.type === 'mousedown' && event.button === 0;
    mouseDownRef.current = isDown;

    if (isDown) {
      document.addEventListener('mouseup', onThumbMouseDownUp);
      document.addEventListener('mousemove', onMouseMoveClick);
    } else {
      document.removeEventListener('mouseup', onThumbMouseDownUp);
      document.removeEventListener('mousemove', onMouseMoveClick);
    }
  };

  const onSliderKeyDown = (event: KeyboadEvent) => {
    const { key } = event;
    const newValue = value + (key === 'ArrowRight' ? step : key === 'ArrowLeft' ? -step : 0);
    if (newValue >= min && newValue <= max) {
      setValue(newValue);
      onChange(newValue);
    }
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <div
      {...otherProps}
      role="slider"
      tabIndex={0}
      ref={ref}
      className={className}
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      onKeyDown={onSliderKeyDown}
      onClick={onMouseMoveClick}
    >
      <div className={styles.bar}>
        <div className={styles.track} />
        <div className={styles.progress} style={{ width: `${progress}%` }} />
        {notches && <Notches count={notchCount} current={currentNotch} />}
      </div>

      <div
        className={styles.thumb}
        style={{ left: `${progress}%` }}
        onMouseDown={onThumbMouseDownUp}
        onTouchMove={onTouchMove}
      />
    </div>
  );
}

export default Slider;
