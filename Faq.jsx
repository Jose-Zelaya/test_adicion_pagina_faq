import "./faq.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Preguntas() {
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="faq">
        <Sidebar />
        <div className="faqRight">
          <div className="faqRightTop">
            <div className="faqCover">
              <img
                className="faqCoverImg"
                src="https://w0.peakpx.com/wallpaper/148/514/HD-wallpaper-purple-squares-geometric-shapes-pattern-purple-aesthetic.jpg"
                alt=""
              />
              <img
                className="faqUserImg"
                src="https://img.freepik.com/free-vector/tiny-people-sitting-standing-near-giant-faq_74855-7879.jpg"
                alt=""
              />
            </div>
            <div className="faqInfo">
              <h4 className="faqInfoName">Informacion Util!</h4>
              <span className="faqInfoDesc">Las preguntas mas frecuentes de los emprendedores!</span>
            </div>
          </div>
          <div className="faqRightBottom">
            <h3>Cuanto cuesta sacar el permiso para poner un negocio en Honduras?</h3>
            <p>El precio es aproximadamente L 40,000</p> 
            <br />
            <h3>Que pasos debo seguir antes de contratar a un empleado?</h3>
            <p>Primero debe contratar los servicios de un abogado para crear una plantilla de contrato de acorde a las necesidades de su negocio.</p> 
            <br />
            <h3>Que impuestos debo pagar para mi negocio</h3>
            <p>Se debe pagar el impuesto sobre venta, impuesto municipaly el aporte al IHSS</p> 
            <br />
            <h3>Que debo hacer para que mi restaurante consiga registro sanitario?</h3>
            <p>Se debe hacer una solicitud al ARSA y un aporte de L 50 por producto</p> 
            <br />
            <h3>Donde puedo rentar oficinas para mi negocio??</h3>
            <p>En SPS y Tegucigalpa hay muchos lugares para rentar como Nova Office o Nuevos Horizontes.</p> 
            <br />
            <h3>Como se consigue el RTN</h3>
            <p>Para conseguir el RTN debe hacer una solicitud en el Instituto de la Propiedad.</p>
          </div>
        </div>
      </div>
    </>
  );
}
