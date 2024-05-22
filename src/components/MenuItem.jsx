function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1 style={{ marginBottom: '10px'  }}>{name}</h1>
        <p style={{ color: 'brown', fontWeight:'bold', fontSize:'20px' }}>{price} TL</p>
    </div>
  );
}

export default MenuItem;
