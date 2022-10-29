import React from 'react';
import styles from './order-details.module.css';
import doneImage from '../../images/done.png';

function OrderDetails({ data }) {
  console.log(data)
  return (
    <>
      <p className="text text_type_digits-large mb-8">
        034536
      </p>
      <h2 className="text text_type_main-medium mb-15">
        идентификатор заказа
      </h2>
      <img className="mb-15" src={doneImage} />
      <p className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  )
}

export default OrderDetails;
