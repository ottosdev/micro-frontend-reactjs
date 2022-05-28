import React from "react";
import { Card, CardBody, CardTitle, CardHeader } from "reactstrap"
export default function ListarIdCliente(props) {
    const cliente = props.location.state

    return (
        <div>

            <Card
                color="light"
            >
                <CardHeader>
                 <h1>O cliente selecionado é: </h1>
                </CardHeader>

                <CardBody>
                    <CardTitle tag="h5">
                        Nome : {cliente.nome}
                    </CardTitle>
                    <CardTitle tag="h5">
                        Sexo : {cliente.sexo}
                    </CardTitle>
                    <CardTitle tag="h5">
                        Peso : {cliente.peso}
                    </CardTitle>
                    <CardTitle tag="h5">
                        Altura : {cliente.altura}
                    </CardTitle>
                    <CardTitle tag="h5">
                        Altura : {cliente.imc}
                    </CardTitle>

                </CardBody>
            </Card>
        </div>
    );
}