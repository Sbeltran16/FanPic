import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Music', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Pokemon', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Video Games', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  { menuItem: 'Movies', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const TabExampleVerticalTabular = () => (
  <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
)

export default TabExampleVerticalTabular