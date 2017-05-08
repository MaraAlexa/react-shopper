import React from 'react'
import renderer from 'react-test-renderer'

import App from './app'


test('content changes when different tabs are clicked', () => {
  const component = renderer.create(<App />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot();

  // manually trigger callback
  tree.props.selectedTab(0)
  // re-render
  tree = component.toJSON()
  expect(tree).toMatchSnapshot();

  // manually trigger callback case 2
  tree.props.selectedTab(1)
  // re-render
  tree = component.toJSON()
  expect(tree).toMatchSnapshot();
})
