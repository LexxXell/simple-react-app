import React, { ChangeEvent, useCallback, useState } from 'react';
import './MyInput.css';
import { IMyComponentProps } from '../@types';

type InputType = 'text' | 'password';

interface IMyInputProps extends IMyComponentProps {
  placeholder?: string;
  type?: InputType;
  onChange?: (value: string) => void;
}

const MyInput: React.FC<IMyInputProps> = ({ width, height, className, placeholder, type = 'text', onChange }) => {
  const [isShow, setIsShow] = useState(false);

  const handleClickShow = useCallback(() => setIsShow(!isShow), [isShow]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      onChange?.(value);
    },
    [onChange],
  );

  const inputType: InputType = type === 'text' ? 'text' : isShow ? 'text' : 'password';
  const show = isShow ? 'show' : '';

  return (
    <div style={{ width, height }} className={`input-wrapper ${className}`}>
      <input type={inputType} placeholder={placeholder} onChange={handleChange} />
      <div className={`show-pass-icon ${show} ${type}`} onClick={handleClickShow}>
        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.86298 6.14997L11.4397 8.72665L11.4519 8.59168C11.4519 7.23789 10.3517 6.1377 8.99795 6.1377L8.86298 6.14997Z" />
          <path d="M8.99795 4.50103C11.2556 4.50103 13.0879 6.33335 13.0879 8.59102C13.0879 9.11863 12.9816 9.6217 12.7976 10.0839L15.1902 12.4765C16.4254 11.4458 17.3988 10.1125 18 8.59102C16.5808 5.00003 13.092 2.45605 8.99798 2.45605C7.85278 2.45605 6.75669 2.66054 5.73828 3.02864L7.50515 4.79141C7.96727 4.61146 8.47034 4.50103 8.99795 4.50103Z" />
          <path d="M0.817983 2.27244L2.68301 4.13747L3.05521 4.50967C1.70552 5.56488 0.638037 6.96776 0 8.59145C1.41515 12.1824 4.90798 14.7264 8.99797 14.7264C10.2659 14.7264 11.4765 14.481 12.5849 14.0352L12.9326 14.3829L15.317 16.7714L16.36 15.7326L1.86093 1.22949L0.817983 2.27244ZM5.34153 6.79188L6.60533 8.05568C6.56852 8.23156 6.54398 8.40741 6.54398 8.59145C6.54398 9.94525 7.64417 11.0454 8.99797 11.0454C9.18202 11.0454 9.3579 11.0209 9.52968 10.9841L10.7935 12.2479C10.2495 12.5178 9.64421 12.6814 8.99797 12.6814C6.7403 12.6814 4.90798 10.8491 4.90798 8.59145C4.90798 7.94525 5.07159 7.33992 5.34153 6.79188Z" />
        </svg>
      </div>
    </div>
  );
};

export default MyInput;
