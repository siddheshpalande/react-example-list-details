import React, { useEffect, useState, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import List from "./List/List";
// import Details from "./Details/Details";
import styles from "./App.module.scss";

const List = lazy(() => import("./List/List"));
const Details = lazy(() => import("./Details/Details"));

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("Api data >>", result);
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <h1 className={styles.headerTitleStyle}>
          List and Details example in react
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              exact={true}
              path="/users/:id"
              render={(props) => (
                <Details
                  data={items.find((e) => e.id === +props.match.params.id)}
                  {...props}
                />
              )}
            />
            <Route
              exact={true}
              path="/users"
              render={(props) => <List listData={items} {...props} />}
            />
            <Route exact path="/">
              <Redirect to="/users" />
            </Route>
          </Switch>
        </Suspense>
      </>
    );
  }
}
