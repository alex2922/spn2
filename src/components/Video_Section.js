import React, { useState, useEffect } from 'react';
import "../Styles/video_section.scss";
import taas from "../assets/72_Taas_Andolan.webm";

function Video_Section(props) {
    const [responsive, setResponsive] = useState(false);
    const [func2, setfunc2] = useState(false);

    useEffect(() => {
        const togglePara = () => {
            setResponsive(window.innerWidth <= 700);
        };

        togglePara();

        window.addEventListener("resize", togglePara);

        return () => {
            window.removeEventListener("resize", togglePara);
        };
    }, []);

    return (
        <>
            {props.data && props.data.map((data) => (
                <div key={data.id} className="jal2-parent parent bg-img-cover">
                    <div className="jal2-overlay"></div>
                    <video
                        autoPlay
                        loop
                        muted
                        className="bg-vid"
                        style={{ position: "absolute", objectFit: "cover" }}
                        height="100%"
                        width="100%"
                    >
                        <source src={taas} type="video/webm" />
                    </video>
                    <div className="jal2-content">
                        <h2 className="jal-headding">{data.Jal_saksharta_heading}</h2>
                        {responsive ? (
                            <p className="jal2-text">
                                <>
                                    {data.Jal_saksharta_para.slice(0, 300)}{" "}
                                    {func2 && (
                                        <p>{data.Jal_saksharta_para.slice(300, 1000)}</p>
                                    )}
                                    {!func2 ? (
                                        <span
                                            onClick={() => {
                                                setfunc2(!func2);
                                            }}
                                            className="read-more"
                                        >
                                            {data.Home_btn}
                                        </span>
                                    ) : (
                                        <span
                                            onClick={() => {
                                                setfunc2(!func2);
                                            }}
                                            className="read-more"
                                        >
                                            {data.Read_less}
                                        </span>
                                    )}
                                </>
                            </p>
                        ) : (
                            <p>{data.Jal_saksharta_para}</p>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
}

export default Video_Section;
