var text = '<i>Markdown formatted text will be previewed here</i>';
var PrevBox = React.createClass({
    convertMarkup: function (e) {
        var markup = marked(e.target.value.toString());
        text = markup;
        if(markup === '')
            text = '<i>Markdown formatted text will be previewed here</i>';
        this.setState({text: markup});
    },
    render: function () {
        return (
            <div className="PrevBox">
                <div className="col-xs-6 original">
                    <textarea
                        className="form-control"
                        placeholder="Enter your normal text here"
                        onChange={this.convertMarkup}
                    />
                </div>
                <div className="col-xs-6 preview">
                    <span dangerouslySetInnerHTML={{__html: text}}/>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <PrevBox />,
    document.getElementById('content')
);