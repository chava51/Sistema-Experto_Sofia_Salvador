import {Button, Container, Row, Col, Card} from 'react-bootstrap'
import { useEffect, useState} from "react"
import {data} from "./data"

export function Recomendator() {
    const defaultObject = {
        value: "",
        isLeaf: false,
    }
    const [item, setItem] = useState(defaultObject)
    useEffect(()=>{
        setItem(data["nodes"][0])
    }, [])

    const onClickButtonYes = () => {
        onClickButton("yes")
    }

    const onClickButtonNo = () => {
        onClickButton("no")
    }

    const onClickButton = (route) => {
        const nextItemId = item[route]
        const nextItem = data["nodes"].filter(
            (actualItem)=>{
                return actualItem.id === nextItemId
            }
        )[0]
        setItem(nextItem)
    }

    return(
        <Container>
            <Card className="p-5 mt-5">
                <Row>
                    <h1 className="text-center mt-5">¿Qué enfermedad tengo?</h1>
                </Row>
                {
                    item.isLeaf ?
                        <Row>
                            <h3 className="text-center mt-5">Probablemente tienes {item.value}</h3>
                        </Row> :
                        <Row>
                            <h3 className="text-center mt-5">{item.value}</h3>
                        </Row>
                }
                <Row>
                    {
                        item.isLeaf ?
                            null
                            :
                            <Col className="xs-12">
                                <div className="text-center">
                                    <Button className="m-3" onClick={onClickButtonYes}>Sí</Button>
                                    <Button className="m-3" onClick={onClickButtonNo}>No</Button>
                                </div>
                            </Col>
                    }
                </Row>
            </Card>
        </Container>
    )
}