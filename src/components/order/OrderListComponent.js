const OrderList = props => {
    const list = props.products.map(product => {
        return (
            <article key={product.id} className="col-9 col-sm-8 col-md-6 col-lg-4 mx-auto">
                <div className="card">
                    <div className="card-header justify-content-between d-flex">
                        <h6>{product.name}</h6>
                        <h6>${product.price.toFixed(2)}</h6>
                    </div>
                    <figure className="card-body">
                        <img src={product.image} alt={product.name} />
                    </figure>
                    <figcaption className="card-footer">
                        {product.description}
                        <form className="text-right">
                            <label htmlFor={product.name}>QTY</label>
                            <input size="2" type="text" pattern="[1-9]" title="Add products less than 9" id={product.name} name={product.name} value="1" />
                            <button type="submit" className="form-control">
                                Add
                            </button>
                        </form>
                    </figcaption>
                </div>
            </article>
        );
    });

    return (
        <div className="container">
            <div className="row">{list}</div>
        </div>
    );
};
export default OrderList;
