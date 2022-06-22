import classes from "./Appbody.module.css";

const Appbody = () =>{
    return(
        <div className={classes.Appbody}>
            <div className={classes.PasekNawigacyjny}>
                <div className={classes.Lewa}>
                <div className={classes.TextLewa}>
                    <p>LOGO</p>
                </div>
                </div>
                <div className={classes.TextLewa2}>
                    <p>ARPPL4</p>

                </div>
                <div className={classes.Prawa}>
                    <div className={classes.TextPrawa}>
                        <p>Home</p>
                    </div>
                </div>
                <div className={classes.TextPrawa2}>
                    <p>Lista</p>

                </div>
            </div>
        </div>
    );
}

export default Appbody;