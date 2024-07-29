"use client";
import { PatternFormat } from "react-number-format";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Button: React.FC = () => {
  const [modal, setModal] = useState(false);

  return (
    <section className="container button">
      <button onClick={() => setModal(!modal)} className="btn1">
        Buyurtma Berish
      </button>
      <div className={`${modal ? "modal" : "none"}`}>
        <div className="modal__content">
          <div className="close">
            <button onClick={() => setModal(false)}>
              <IoMdClose className="icon" />
            </button>
          </div>
          <div className="middle">
            <p>
              Iltimos, operatorlarimiz siz bilan bog'lanishi uchun aloqa
              ma'lumotlaringizni qoldiring.
            </p>
            <form action="">
              <input type="text" placeholder="Sizning ismingiz" required />
              <PatternFormat
                format="+998 (##) ### ## ##"
                allowEmptyFormatting
                mask="_"
                required
              />
              <button className="btn1 btn">Buyurtma Berish</button>
            </form>
            <p className="p">
              Ma’lumotlarni to’ldirib “Buyurtma berish” tugmasini bosish orqali
              ma’lumotlar yuboriladi va operator siz bilan tez orqada
              bog’lanadi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Button;
