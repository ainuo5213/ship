import React from 'react'
import classnames from 'classnames'

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link',
    Dashed = 'dashed'
}

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string,
    loading?: boolean
}

// buttonProps
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>

// linkProps
type AnchorButtonProps = NativeButtonProps & React.AnchorHTMLAttributes<HTMLElement>

// 将props全部设置为可选属性
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = props => {
    const {
        btnType,
        disabled,
        children,
        size,
        href,
        className,
        loading,
        ...restProps
    } = props;
    // btn btn-lg btn-primary
    const classNames = classnames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disabled,
        'btn-loading': loading
    });
    if (btnType === ButtonType.Link && href) {
        return <a {...restProps} href={href} className={classNames}>{children}</a>
    } else {
        return <button {...restProps} className={classNames} disabled={disabled}>
            {
                loading ? <span className={'btn-loading-icon'}><i className="fa fa-spinner"/></span> : ''
            }
            <span>{children}</span>
        </button>
    }
};

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default,
    loading: false,
};

export default Button;
