var Homepage = React.createClass({
    render : function(){
        return(
            <div>
                <h3>I am the homapge</h3>
            </div>
            );
    }
});


var Layout = React.createClass({
    render: function () {
        var contentStyle = {
            backgroundColor: "red",
            height: "100%",
            padding: "0"
        }
        var bodyStyle = {
            height: "100%"
        }
        var borderStyle = {
            backgroundColor: "grey",
            height: "100%"
        }
        var navbarStyle = {
            height: "10%",
            backgroundColor: "azure",
            width: "100%"
        }
        var homepageStyle = {
            height: "80%"
        }
        var footerStyle = {
            height: "8%",
            backgroundColor: "azure",
            width:"100%"
        }
        return(
            <div className="container-fluid" style={bodyStyle}>
                <div className="col-md-2" style={borderStyle}>
                        First column
                </div>
                <div className="col-md-8" style={contentStyle}>
                    <div className="my_navabar" style={navbarStyle}></div>
                    <div style={homepageStyle}>
                        <Homepage style={homepageStyle} />
                    </div>
                    <div className="my_footer" style={footerStyle}></div> 
                </div>
                <div className="col-md-2" style={borderStyle}>
                    third colums
                </div>
            </div>
            );
    }
});

ReactDOM.render(
    <Layout />,
    document.getElementById("homepage")
    );
