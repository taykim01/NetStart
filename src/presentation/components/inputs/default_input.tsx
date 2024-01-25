export default function DefaultInput(props: any) {

    const handleChange = (e: any) => {
        const value = e.target.value;
        props.takeInput(value)
    }

    return (
        <div className="wave-group">
            <style>
                {`.bar:before, .bar:after {
                        background: white;
                    }
                    .input {
                        border-bottom: 1.5px solid var(--dark);
                    }
                    .input:focus ~ label .label-char,
                    .input:valid ~ label .label-char {
                        color: 'var(--dark)'
                    }
                `}
            </style>
            <input
                required
                type="text"
                className="input"
                onChange={handleChange}
            />
            <span className="bar" />
            <label className="label">
                {props.label?.split('').map((char: string, idx: number) => (
                    <span key={idx} className="label-char">{char}</span>
                ))}
            </label>
        </div>
    )
}