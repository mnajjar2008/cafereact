const OrderList = props => {
    const list = props.items.map(item => {
        return (
            <article key={item.id} className="col-9 col-sm-8 col-md-6 col-lg-4 mx-auto">
                <div className="card">
                    <div className="card-header justify-content-between d-flex">
                        <h6>{item.name}</h6>
                        <h6>${item.price.toFixed(2)}</h6>
                    </div>
                    <figure className="card-body">
                        <img src={item.image} alt={item.name} />
                    </figure>
                    <figcaption className="card-footer">
                        {item.description}
                        <form className="text-right">
                            <label htmlFor={item.name}>QTY</label>
                            <input size="2" type="text" pattern="[1-9]" title="Add items less than 9" id={item.name} name={item.name} value="1" />
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
