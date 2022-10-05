import './style.css';
import WeatherCard from '../../components/WeatherCard';
import { a11yDark } from 'react-code-blocks';
import { CopyBlock } from 'react-code-blocks';

const router = `import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { HomePage } from './pages/Home';
import { Tutorial } from './pages/Tutorial';
	import { NewPage } from './pages/NewPage';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tutorial" exact component={Tutorial} />
  	<Route path="/newPage" exact component={NewPage} />
    </Switch>
  </BrowserRouter>
)`


const componentExample = `import './style.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function HomePage() {
  return (
    <div className="homeContainer">
      <p className="h1 text-center">Happy Hacking!</p>

      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
`

function TableOfContents() {
	const TableItem = (props) => (
		<a href={`#${props.linkTo}`} className="list-group-item list-group-item-action">
			{props.text}
		</a>
	);

	return (
		<div className="list-group list-group-numbered">
			<TableItem linkTo="newRoutes" text="Adding New Pages" />
			<TableItem linkTo="addingComponents" text="Adding New Components" />
			<TableItem linkTo="apiFetching" text="Fetching Data" />
		</div>
	)
}

export function Tutorial() {
	return (
		<div className="container">
			<div style={{ padding: '0 20%' }} className="py-5">
				<h1 className='h1'>Tutorial</h1>
				In this section you'll learn how to quickly bootstrap and build your application.

				<div className="ml-5 my-5">
					<TableOfContents />
				</div>

				<div id='newPages'>
					<h3 className='h3'>1. Adding new pages</h3>
					Navigate to routes/index.jsx, and simply import and add a route to your new page

					<CopyBlock
						theme={a11yDark}
						text={router}
						language={'jsx'}
						showLineNumbers={true}
						wrapLines
						highlight={"5,13"}
					/>

					You can now navigate and link to your new route.
					<br />
					Feel free to use any of the existing pages as templates.
				</div>

				<div className='my-5' id='addingComponents'>
					<h3 className='h3'>2. Adding components</h3>

					<div>
						This project is setup to make use of <a href="https://react-bootstrap.netlify.app/components/alerts">react-bootstrap</a> and the <a href='https://getbootstrap.com/docs/5.2/components/accordion/'>bootstrap</a> CSS classes.
						<br />
						Below you can see an example on how to build a quick component with these tools:

						<p className='fst-italic mt-3'>Example: Building a product card</p>

						Firstly, search for "Card" in react-bootstrap, and click the results to see the example.

						<img alt="" className='mb-5 shadow' style={{ maxWidth: '100%' }} src="/img/cardExample.png"></img>
						<br />
						You can now and paste the sample code block into your component. Adjust for imports and exports like below on Homepage.
						<br />

						<span className='mb-5'>
							<CopyBlock
								theme={a11yDark}
								text={componentExample}
								language={'jsx'}
								showLineNumbers={true}
								wrapLines
							/>
						</span>

						<div className='mt-5'>
							Your component should render now.
							<img alt="" className='mb-5 shadow' style={{ maxWidth: '100%' }} src="/img/componentExample1.png"></img>

							With some adjustements you can integrate it further into your application.
							<img alt="" className='mb-5 shadow' style={{ maxWidth: '100%' }} src="/img/componentExample2.png"></img>
						</div>
					</div>
				</div>

				<div className='my-5' id="apiFetching">
					<h3 className='h3'>3. Fetching Data</h3>

					This project is setup to use axios as the fetching library. It supports promises and all HTTP verbs.

					You can find an example by inspecting the following component:

					<div className='my-5'>
						<WeatherCard />
					</div>
				</div>

				Happy Hacking!
				
			</div>
		</div>
	);
}
