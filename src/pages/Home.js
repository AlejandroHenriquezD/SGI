import "./Home.css"
import Footer2 from "../components/Footer2";
import Header2 from "../components/Header2";
import Images from "../components/Images";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
    return (
        <>
            <Header2 />
            <ScrollToTop />


            <div class="background1">
                <div class="row">
                    <div class="col-8">
                        <h2 class="title">¿Qué hace un Sabío Guía Intérprete?</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 ml-5">
                        <p class="text1">Un Sabio Guía Intérprete es aquella persona de edad avanzada que, de forma voluntaria, comparte sus vivencias relacionadas con algún elemento de nuestro patrimonio histórico, etnográfico o ambiental, y que participa activamente en la transmisión del mismo.</p>
                    </div>
                    <div class="col-6 ml-5">
                        <p class="text1">Los Sabios Guías Intérpretes realizan esta tarea contando con el apoyo de un grupo de profesionales que colaboran en dicha labor.</p>
                    </div>
                </div>
            </div>



            <Images />
            <Footer2 />
        </>
    );
}