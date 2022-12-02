const Header = (item) => {
    const { title, subtitle } = item;

    return (
        <div className="container-fluid bg-dark p-5">
        <h1 className="text-white text-center">{title}</h1>
        <h5 className="text-white text-center">{subtitle}</h5>
    </div>
    )

};

export default Header;