function Tooltip({ delay, children, content, direction, displayUnConditionally = false }: TooltipProps) {
    const toolTipRef = useRef<HTMLDivElement | null>(null);
    const childRef = useRef<HTMLElement | null>(null);
    let timeout: ReturnType<typeof setTimeout> | undefined;
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, delay || 100);
    };

    const hideTip = () => {
        if (timeout) clearTimeout(timeout);
        setActive(false);
    };

    return (
        <>
            {React.cloneElement(children, { onMouseEnter: showTip, ref: childRef, onMouseLeave: hideTip })}
            {active &&
                createPortal(
                    <div className={`custom-tooltip ${direction || 'bottom'}`} ref={toolTipRef}>
                        {content}
                    </div>,
                    document.body
                )}
        </>
    );
}
