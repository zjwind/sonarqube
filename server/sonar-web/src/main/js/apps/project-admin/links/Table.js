/*
 * SonarQube
 * Copyright (C) 2009-2018 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import React from 'react';
import PropTypes from 'prop-types';
import LinkRow from './LinkRow';
import { orderLinks } from './utils';
import { translate } from '../../../helpers/l10n';

export default class Table extends React.PureComponent {
  static propTypes = {
    links: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  renderHeader() {
    // keep empty cell for actions
    return (
      <thead>
        <tr>
          <th className="nowrap">{translate('project_links.name')}</th>
          <th className="nowrap width-100">{translate('project_links.url')}</th>
          <th className="thin">&nbsp;</th>
        </tr>
      </thead>
    );
  }

  render() {
    const orderedLinks = orderLinks(this.props.links);

    const linkRows = orderedLinks.map(link => (
      <LinkRow key={link.id} link={link} onDelete={this.props.onDelete} />
    ));

    return (
      <div className="boxed-group boxed-group-inner">
        <table className="data zebra" id="project-links">
          {this.renderHeader()}
          <tbody>{linkRows}</tbody>
        </table>
      </div>
    );
  }
}
