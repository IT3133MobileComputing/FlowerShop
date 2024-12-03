import '../assets/CSS/layout.css';
import { flowers } from './FlowerDB';

export default function Product() {

    return (
        <div className="grid-item">
            {
                flowers.map((flower) =>
                    <div class="card">
                        <img src={require('../assets/image/' + flower.img)}/>
                        <div class="card-body">
                            <h5 class="card-title">{flower.name} Price:{flower.price}</h5>
                            <div class="quantity-container">
                                <label for="quantity">Quantity:</label>
                                <input type="number" id="quantity" name="quantity" />
                            </div>
                            <button class="card-button">Add to Cart</button>
                        </div>
                    </div>
                )
            }              
        </div>
    );
}