import React from 'react';
import classnames from 'classnames';

const Checkbox = ({
  wrapperClassname,
  inputClassname,
  onChange,
  label,
  id,
  checked
}) => {
  const baseClass = classnames('input-checkbox', wrapperClassname);
  const inputClass = classnames('mr-2', inputClassname);
  return (
    <div className={baseClass}>
      <input
        className={inputClass}
        type="checkbox"
        id={id}
        onChange={e => {
          onChange(e.target.id, e.currentTarget.checked);
        }}
        checked={checked}
      />
      <span>{label}</span>
    </div>
  );
};

export default Checkbox;
