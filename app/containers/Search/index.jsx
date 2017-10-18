import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/List'

class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <SearchHeader keyword={this.props.match.params.keyword} history={this.props.history}/>
                <SearchList keyword={this.props.match.params.keyword} category={this.props.match.params.category}/>
            </div>
        )
    }
}

export default Search
