import Form from './components/Form/Form';
import GlobalStyle, { Row, Section, Text } from './globalStyles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Row gap="2rem" height="80px" justify="center" align="center" background="green">
				<Link to="signup">
					<Text size="2rem"> Signup</Text>
				</Link>
				<Link to="/">
					<Text size="2rem"> Home</Text>
				</Link>
			</Row>
			<Switch>
				<Route path="/" exact component={() => <Section>HOME</Section>} />
				<Route path="/signup" component={Form} />
			</Switch>
		</Router>
	);
}

export default App;
