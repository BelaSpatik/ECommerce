import React, { useState, useEffect } from 'react'
import "./cartorder.css"
import { useSpring, animated } from "react-spring"
import firebase from "firebase/app"
import "@firebase/firestore"
import { getFirestore } from "../../firebase"
import CartForm from "../CartForm/CartForm"
import OrderBill from "../OrderBill/OrderBill"

const CartOrder = ({cart, total}) => {
    
    const [userInfo, setUserInfo] = useState()
    const [orderId, setOrderId] = useState("")

    const getInfo = (user) => {
        setUserInfo(user);
    }

    useEffect(() => {
        const generateOrder = () => {
            const db = getFirestore()
            const orders = db.collection("orders");
            const newOrder = {
                buyer: userInfo,
                items: cart,
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: total
            }
            //console.log(userInfo); console.log(newOrder)
            orders.add(newOrder).then(({id}) => {
                setOrderId(id)
            }).catch(error => console.log("Ha habido un error:", error))
        }
        userInfo && generateOrder()
    }, [userInfo, cart, total])
    
    useEffect(() => {
        const updateStock = () => {
            (async function () {
                const db = getFirestore()
                const itemsToUpdate = db.collection("catalog")
                .where(firebase.firestore.FieldPath.documentId(), "in", cart.map(purchase => purchase.item.bookId))
    
                const query = await itemsToUpdate.get()  //await, otra forma en vez de .then 
                //console.log(query)
                const batch = db.batch()
    
                const outOfStock = [];
                query.docs.forEach((docSnapshot, index) => {
                    if(docSnapshot.data().stock >= cart[index].quantity) {
                        batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - cart[index].quantity })
                    } else {
                        outOfStock.push({...docSnapshot.data(), id: docSnapshot.id})
                    }
                })
                outOfStock.length === 0 && await batch.commit()
            })()
        }
        orderId && updateStock()
    },[orderId, cart])

    const slide = useSpring({
        from: { opacity: 0, transform: "translateY(-90%)"},
        to: { opacity: 1, transform: "translateY(0%)" },
    })

    //console.log(userInfo)

    return (
        <animated.div className="cartorder__div" style={slide}>
            <CartForm getInfo={getInfo} orderId={orderId} />
            { orderId &&
            <OrderBill userInfo={userInfo} cart={cart} orderId={orderId} />}
        </animated.div>
    )
}

export default CartOrder
