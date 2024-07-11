import React from 'react';
import {
  Button,
  DataList,
  DataListCheck,
  DataListControl,
  DataListDragButton,
  DataListItem,
  DataListItemRow,
  DataListCell,
  DataListItemCells,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  Modal,
  OverflowMenu,
  OverflowMenuGroup,
  OverflowMenuItem,
  OptionsMenu,
  OptionsMenuToggle,
  Pagination,
  PaginationVariant,
  Text,
  TextContent,
  Select,
  SelectVariant,
  TextVariants
} from '@patternfly/react-core';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';

class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.actions = [
      {
        title: <a href="#">Link</a>
      },
      {
        title: 'Action'
      },
      {
        isSeparator: true
      },
      {
        title: <a href="#">Separated link</a>
      }
    ];
    this.defaultColumns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit', ''];
    this.defaultRows = [
      {
        cells: [
          {
            title: (
              <React.Fragment>
                <div>Node 1</div>
                <a href="#">siemur/test-space</a>
              </React.Fragment>
            ),
            props: { column: 'Repositories' }
          },
          {
            title: (
              <React.Fragment>
                <CodeBranchIcon key="icon" /> 10
              </React.Fragment>
            ),
            props: { column: 'Branches' }
          },
          {
            title: (
              <React.Fragment>
                <CodeIcon key="icon" /> 25
              </React.Fragment>
            ),
            props: { column: 'Pull requests' }
          },
          {
            title: (
              <React.Fragment>
                <CubeIcon key="icon" /> 5
              </React.Fragment>
            ),
            props: { column: 'Workspaces' }
          },
          {
            title: '2 days ago',
            props: { column: 'Last commit' }
          },
          {
            title: (
              <React.Fragment>
                <a href="#">Action link</a>
              </React.Fragment>
            ),
            props: { column: '' }
          }
        ]
      },
      {
        cells: [
          {
            title: (
              <React.Fragment>
                <div>Node 2</div>
                <a href="#">siemur/test-space</a>
              </React.Fragment>
            ),
            props: { column: 'Repositories' }
          },
          {
            title: (
              <React.Fragment>
                <CodeBranchIcon key="icon" /> 8
              </React.Fragment>
            ),
            props: { column: 'Branches' }
          },
          {
            title: (
              <React.Fragment>
                <CodeIcon key="icon" /> 30
              </React.Fragment>
            ),
            props: { column: 'Pull requests' }
          },
          {
            title: (
              <React.Fragment>
                <CubeIcon key="icon" /> 2
              </React.Fragment>
            ),
            props: { column: 'Workspaces' }
          },
          {
            title: '2 days ago',
            props: { column: 'Last commit' }
          },
          {
            title: (
              <React.Fragment>
                <a href="#">Action link</a>
              </React.Fragment>
            ),
            props: { column: '' }
          }
        ]
      },
      {
        cells: [
          {
            title: (
              <React.Fragment>
                <div>Node 3</div>
                <a href="#">siemur/test-space</a>
              </React.Fragment>
            ),
            props: { column: 'Repositories' }
          },
          {
            title: (
              <React.Fragment>
                <CodeBranchIcon key="icon" /> 12
              </React.Fragment>
            ),
            props: { column: 'Branches' }
          },
          {
            title: (
              <React.Fragment>
                <CodeIcon key="icon" /> 48
              </React.Fragment>
            ),
            props: { column: 'Pull requests' }
          },
          {
            title: (
              <React.Fragment>
                <CubeIcon key="icon" /> 13
              </React.Fragment>
            ),
            props: { column: 'Workspaces' }
          },
          {
            title: '30 days ago',
            props: { column: 'Last commit' }
          },
          {
            title: (
              <React.Fragment>
                <a href="#">Action link</a>
              </React.Fragment>
            ),
            props: { column: '' }
          }
        ]
      },
      {
        cells: [
          {
            title: (
              <React.Fragment>
                <div>Node 4</div>
                <a href="#">siemur/test-space</a>
              </React.Fragment>
            ),
            props: { column: 'Repositories' }
          },
          {
            title: (
              <React.Fragment>
                <CodeBranchIcon key="icon" /> 3
              </React.Fragment>
            ),
            props: { column: 'Branches' }
          },
          {
            title: (
              <React.Fragment>
                <CodeIcon key="icon" /> 8
              </React.Fragment>
            ),
            props: { column: 'Pull requests' }
          },
          {
            title: (
              <React.Fragment>
                <CubeIcon key="icon" /> 20
              </React.Fragment>
            ),
            props: { column: 'Workspaces' }
          },
          {
            title: '8 days ago',
            props: { column: 'Last commit' }
          },
          {
            title: (
              <React.Fragment>
                <a href="#">Action link</a>
              </React.Fragment>
            ),
            props: { column: '' }
          }
        ]
      },
      {
        cells: [
          {
            title: (
              <React.Fragment>
                <div>Node 5</div>
                <a href="#">siemur/test-space</a>
              </React.Fragment>
            ),
            props: { column: 'Repositories' }
          },
          {
            title: (
              <React.Fragment>
                <CodeBranchIcon key="icon" /> 34
              </React.Fragment>
            ),
            props: { column: 'Branches' }
          },
          {
            title: (
              <React.Fragment>
                <CodeIcon key="icon" /> 21
              </React.Fragment>
            ),
            props: { column: 'Pull requests' }
          },
          {
            title: (
              <React.Fragment>
                <CubeIcon key="icon" /> 26
              </React.Fragment>
            ),
            props: { column: 'Workspaces' }
          },
          {
            title: '2 days ago',
            props: { column: 'Last commit' }
          },
          {
            title: (
              <React.Fragment>
                <a href="#">Action link</a>
              </React.Fragment>
            ),
            props: { column: '' }
          }
        ]
      }
    ];
    this.state = {
      filters: [],
      filteredColumns: [],
      columns: this.defaultColumns,
      rows: this.defaultRows,
      canSelectAll: true,
      isModalOpen: false,
      check1: true,
      check2: true,
      check3: true,
      check4: true,
      check5: true,
      liveText: '',
      id: '',
      itemOrder: ['data1', 'data2', 'data3', 'data4', 'data5']
    };
    this.onSelect = this.onSelect.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.matchCheckboxNameToColumn = name => {
      switch (name) {
        case 'check1':
          return 'Repositories';
        case 'check2':
          return 'Branches';
        case 'check3':
          return 'Pull requests';
        case 'check4':
          return 'Workspaces';
        case 'check5':
          return 'Last commit';
      }
    };
    this.matchDataListNameToColumn = name => {
      switch (name) {
        case 'data1':
          return 'Repositories';
        case 'data2':
          return 'Branches';
        case 'data3':
          return 'Pull requests';
        case 'data4':
          return 'Workspaces';
        case 'data5':
          return 'Last commit';
      }
    };
    this.filterData = (checked, name) => {
      const { rows, columns, filters } = this.state;
      if (checked) {
        const updatedFilters = filters.filter(item => item !==   name);
        const filteredColumns = this.defaultColumns.filter(column => !updatedFilters.includes(column));
        this.setState({
          filters: updatedFilters,
          filteredColumns: filteredColumns
        });
      } else {
        let updatedFilters = filters;
        updatedFilters.push(name);
        const filteredColumns = columns.filter(column => !filters.includes(column));
        this.setState({
          filters: updatedFilters,
          filteredColumns: filteredColumns
        });
      }
    };
    this.unfilterAllData = () => {
      this.setState({
        filters: [],
        filteredColumns: this.defaultColumns
      });
    };
    this.handleChange = (checked, event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      this.filterData(checked, this.matchCheckboxNameToColumn(target.name));
      this.setState({
        [target.name]: value
      });
    };
    this.handleModalToggle = () => {
      this.setState(({ isModalOpen }) => ({
        isModalOpen: !isModalOpen
      }));
    };
    this.onSave = () => {
      const orderedColumns = this.state.itemOrder.map(item => this.matchDataListNameToColumn(item));
      // concat empty string at the end for actions column
      const filteredOrderedColumns = orderedColumns
        .filter(col => this.state.filteredColumns.length === 0 || this.state.filteredColumns.indexOf(col) > -1)
        .concat(['']);
      const orderedRows = [];
      this.defaultRows.forEach(row => {
        const updatedCells = row.cells
          .filter(cell => filteredOrderedColumns.indexOf(cell.props.column) > -1)
          .sort((cellA, cellB) => {
            const indexA = filteredOrderedColumns.indexOf(cellA.props.column);
            const indexB = filteredOrderedColumns.indexOf(cellB.props.column);
            if (indexA < indexB) {
              return -1;
            }
            if (indexA > indexB) {
              return 1;
            }
            // a must be equal to b
            return 0;
          });
        orderedRows.push({
          cells: updatedCells
        });
      });
      this.setState(({ isModalOpen }) => ({
        columns: filteredOrderedColumns,
        rows: orderedRows,
        isModalOpen: !isModalOpen
      }));
    };
    
    this.selectAllColumns = () => {
      this.unfilterAllData();
      this.setState({
        check1: true,
        check2: true,
        check3: true,
        check4: true,
        check5: true
      });
    };

    this.onDragStart = id => {
      this.setState({
        id: id,
        liveText: `Dragging started for item id: ${id}.`
      });
    };

    this.onDragMove = (oldIndex, newIndex) => {
      const { id } = this.state;
      this.setState({
        liveText: `Dragging item ${id}.`
      });
    };

    this.onDragCancel = () => {
      this.setState({
        liveText: `Dragging cancelled. List is unchanged.`
      });
    };

    this.onDragFinish = itemOrder => {
      this.setState({
        liveText: `Dragging finished`,
        itemOrder
      });
    };
  }

  onSelect(event, isSelected, rowId) {
    let rows;
    if (rowId === -1) {
      rows = this.state.rows.map(oneRow => {
        oneRow.selected = isSelected;
        return oneRow;
      });
    } else {
      rows = [...this.state.rows];
      rows[rowId] = { ...rows[rowId], selected: isSelected };
    }
    this.setState({
      rows
    });
  }

  toggleSelect(checked) {
    this.setState({
      canSelectAll: checked
    });
  }

  renderModal() {
    const { isModalOpen } = this.state;
    return (
      <Modal
        title="Manage columns"
        isOpen={isModalOpen}
        variant="small"
        description={
          <TextContent>
            <Text component={TextVariants.p}>Selected categories will be displayed in the table.</Text>
            <Button isInline onClick={this.selectAllColumns} variant="link">
              Select all
            </Button>
          </TextContent>
        }
        onClose={this.handleModalToggle}
        actions={[
          <Button key="save" variant="primary" onClick={this.onSave}>
            Save
          </Button>,
          <Button key="cancel" variant="secondary" onClick={this.handleModalToggle}>
            Cancel
          </Button>
        ]}
      >
        <DataList
          aria-label="Table column management"
          id="table-column-management"
          isCompact
          onDragFinish={this.onDragFinish}
          onDragStart={this.onDragStart}
          onDragMove={this.onDragMove}
          onDragCancel={this.onDragCancel}
          itemOrder={this.state.itemOrder}
        >
          <DataListItem aria-labelledby="table-column-management-item1" id="data1">
            <DataListItemRow>
              <DataListControl>
                <DataListDragButton
                  aria-label="Reorder"
                  aria-labelledby="table-column-management-item1"
                  aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                  aria-pressed="false"
                />
                <DataListCheck
                  aria-labelledby="table-column-management-item1"
                  checked={this.state.check1}
                  name="check1"
                  id="check1"
                  onChange={this.handleChange}
                  otherControls
                />
              </DataListControl>
              <DataListItemCells
                dataListCells={[
                  <DataListCell id="table-column-management-item1" key="table-column-management-item1">
                    <label htmlFor="check1">Repositories</label>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem aria-labelledby="table-column-management-item2" id="data2">
            <DataListItemRow>
              <DataListControl>
                <DataListDragButton
                  aria-label="Reorder"
                  aria-labelledby="table-column-management-item2"
                  aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                  aria-pressed="false"
                />
                <DataListCheck
                  aria-labelledby="table-column-management-item2"
                  checked={this.state.check2}
                  name="check2"
                  id="check2"
                  onChange={this.handleChange}
                  otherControls
                />
              </DataListControl>
              <DataListItemCells
                dataListCells={[
                  <DataListCell id="table-column-management-item2" key="table-column-management-item2">
                    <label htmlFor="check2">Branches</label>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem aria-labelledby="table-column-management-item3" id="data3">
            <DataListItemRow>
              <DataListControl>
                <DataListDragButton
                  aria-label="Reorder"
                  aria-labelledby="table-column-management-item3"
                  aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                  aria-pressed="false"
                />
                <DataListCheck
                  aria-labelledby="table-column-management-item3"
                  checked={this.state.check3}
                  name="check3"
                  id="check3"
                  onChange={this.handleChange}
                  otherControls
                />
              </DataListControl>
              <DataListItemCells
                dataListCells={[
                  <DataListCell id="table-column-management-item3" key="table-column-management-item3">
                    <label htmlFor="check3">Pull requests</label>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem aria-labelledby="table-column-management-item4" id="data4">
            <DataListItemRow>
              <DataListControl>
                <DataListDragButton
                  aria-label="Reorder"
                  aria-labelledby="table-column-management-item4"
                  aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                  aria-pressed="false"
                />
                <DataListCheck
                  aria-labelledby="table-column-management-item4"
                  checked={this.state.check4}
                  name="check4"
                  id="check4"
                  onChange={this.handleChange}
                  otherControls
                />
              </DataListControl>
              <DataListItemCells
                dataListCells={[
                  <DataListCell id="table-column-management-item4" key="table-column-management-item4">
                    <label htmlFor="check4">Workspaces</label>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem aria-labelledby="table-column-management-item5" id="data5">
            <DataListItemRow>
              <DataListControl>
                <DataListDragButton
                  aria-label="Reorder"
                  aria-labelledby="table-column-management-item5"
                  aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                  aria-pressed="false"
                />
                <DataListCheck
                  aria-labelledby="table-column-management-item5"
                  checked={this.state.check5}
                  name="check5"
                  id="check5"
                  onChange={this.handleChange}
                  otherControls
                />
              </DataListControl>
              <DataListItemCells
                dataListCells={[
                  <DataListCell id="table-column-management-item5" key="table-column-management-item5">
                    <label htmlFor="check5">Last commit</label>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
        </DataList>
      </Modal>
    );
  }

  render() {
    const { canSelectAll, columns, rows } = this.state;

    const toolbarItems = (
      <React.Fragment>
        <span id="page-layout-table-draggable-column-management-action-toolbar-top-select-checkbox-label" hidden>
          Choose one
        </span>
        <ToolbarContent>
          <ToolbarItem variant="overflow-menu">
            <OverflowMenu breakpoint="md">
              <OverflowMenuItem isPersistent>
                <Select
                  id="page-layout-table-draggable-column-management-action-toolbar-top-select-checkbox-toggle"
                  variant={SelectVariant.single}
                  onToggle={() => {}}
                  aria-label="Select Input"
                  aria-labelledby="page-layout-table-draggable-column-management-action-toolbar-top-select-checkbox-label page-layout-table-column-management-action-toolbar-top-select-checkbox-toggle"
                  placeholderText={
                    <>
                      <FilterIcon /> Name
                    </>
                  }
                />
              </OverflowMenuItem>
              <OverflowMenuItem>
                <OptionsMenu
                  id="page-layout-table-draggable-column-management-action-toolbar-top-options-menu-toggle"
                  isPlain
                  menuItems={[]}
                  toggle={
                    <OptionsMenuToggle
                      toggleTemplate={<SortAmountDownIcon aria-hidden="true" />}
                      aria-label="Sort by"
                      hideCaret
                    />
                  }
                />
              </OverflowMenuItem>
              <OverflowMenuGroup groupType="button" isPersistent>
                <OverflowMenuItem>
                  <Button variant="primary">Action</Button>
                </OverflowMenuItem>
                <OverflowMenuItem>
                  <Button variant="link" onClick={this.handleModalToggle}>
                    Manage columns
                  </Button>
                </OverflowMenuItem>
              </OverflowMenuGroup>
            </OverflowMenu>
          </ToolbarItem>
          <ToolbarItem variant="pagination">
            <Pagination
              itemCount={37}
              widgetId="pagination-options-menu"
              page={1}
              variant={PaginationVariant.top}
              isCompact
              titles={{
                paginationTitle: `Draggable column management top pagination`
              }}
            />
          </ToolbarItem>
        </ToolbarContent>
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <Table
          gridBreakPoint="grid-xl"
          header={
            <React.Fragment>
              <Toolbar id="page-layout-table-draggable-column-management-action-toolbar-top">{toolbarItems}</Toolbar>
            </React.Fragment>
          }
          aria-label="This is a table with checkboxes"
          id="page-layout-table-draggable-column-management-action-table"
          onSelect={this.onSelect}
          cells={columns}
          rows={rows}
          actions={this.actions}
          canSelectAll={canSelectAll}
        >
          <TableHeader />
          <TableBody />
        </Table>
        <Pagination
          isCompact
          id="page-layout-table-draggable-column-management-action-toolbar-bottom"
          itemCount={37}
          widgetId="pagination-options-menu-bottom"
          page={1}
          variant={PaginationVariant.bottom}
          titles={{
            paginationTitle: `Draggable column management bottom pagination`
          }}
        />
        {this.renderModal()}
      </React.Fragment>
    );
  }
} 
  export default Practice