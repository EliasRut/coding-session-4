import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "@reach/router"

export default class Navigation extends React.Component {
	render() {
		return (
			<Menu>
				<Menu.Item
					as="div"
					active={this.props.activePage === '/'}
				>
					<Link to="/">Blog</Link>
				</Menu.Item>
				<Menu.Item
					as="div"
					active={this.props.activePage === '/planets'}
				>
					<Link to="/planets">Planets</Link>
				</Menu.Item>
			</Menu>
		);
	}
}