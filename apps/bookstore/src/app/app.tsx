import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { BooksFeature } from '@acme/books/feature'
// importing the UI library into our App
import {
  GlobalStyles,
  Header,
  Main,
  NavigationItem,
  NavigationList
} from '@acme/ui'
export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header>
        <h1>Bookstore</h1>
        <NavigationList>
          <NavigationItem>
            <Link to='/books'>Books</Link>
          </NavigationItem>
        </NavigationList>
      </Header>
      <Main>
        <Routes>
          <Route path='/books' element={<BooksFeature />} />
          {/* path / redirect to books */}
          <Route path='/' element={<Navigate to='/books' />} />
        </Routes>
      </Main>
    </>
  )
}
