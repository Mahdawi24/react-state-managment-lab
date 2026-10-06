import { useState } from 'react'
import './App.css'

function App() {
  const [availableItems, setAvailableItems] = useState([
    {
      id: 1,
      name: "Black T shirt",
      price: 5
    },
    {
      id: 2,
      name: "Hanger Set",
      price: 8
    },
    {
      id: 3,
      name: "Thoub",
      price: 12
    },
    {
      id: 4,
      name: "Computer Bag",
      price: 20
    },
    {
      id: 5,
      name: "Couch",
      price: 50
    },
    {
      id: 6,
      name: "Gaming Chair",
      price: 70
    }
  ]
  )

  const [shoppingCart, setShoppingCart] = useState([])
  const [availableBalance, setAvailableBalance] = useState(100)
  const [warningMessage, setWarningMessage] = useState(null)

  function handleAddToCart(item) {
    if (availableBalance >= item.price) {
      const updatedAvailableItems = availableItems.filter((oneItem) => {
        return oneItem.id !== item.id
      })
      setAvailableItems(updatedAvailableItems)
      setShoppingCart([...shoppingCart, item])
      setAvailableBalance(availableBalance - item.price)
    } else {
      setWarningMessage('You are so broke bro hhhhh!')
    }
  }

  function handleRemoveFromShoppingCart(itemToRemove){
  const updatedShoppingCart = shoppingCart.filter((oneItem) => {
    return oneItem.id !== itemToRemove.id
  })
  setShoppingCart(updatedShoppingCart)
  setAvailableItems([...availableItems, itemToRemove])
  setAvailableBalance(availableBalance + itemToRemove.price)
  }

  return (
    <>

      <h1>Sayed Hameds Closet</h1>

      <h2>Your Balance: {availableBalance}</h2>
      {warningMessage}
      <h2>Available Items</h2>
      {availableItems.map((oneAvilableItem) =>
        <div key={oneAvilableItem.id}>
          <p>Item ID: {oneAvilableItem.id}</p>
          <p>Item Name: {oneAvilableItem.name}</p>
          <p>Item Price: {oneAvilableItem.price}</p>
          <br />
          <button onClick={() => { handleAddToCart(oneAvilableItem) }}> Add to Cart </button>
        </div>
      )}
      <h2>Shopping Cart</h2>
      {shoppingCart.length === 0 ? (<p>Your shopping cart is currently empty.</p>) :
        (shoppingCart.map((oneShoppingCartItem) => (
          <div key={oneShoppingCartItem.id}>
            <p>Item Name: {oneShoppingCartItem.name}</p>
            <p>Item Price: ${oneShoppingCartItem.price}</p>
            <br />
            <button onClick={() => { handleRemoveFromShoppingCart(oneShoppingCartItem) }}>Remove from Cart</button>
          </div>
        ))
        )}

    </>
  )
}

export default App
