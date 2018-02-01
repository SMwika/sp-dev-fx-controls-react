import { override } from '@microsoft/decorators';
import * as React from 'react';
import { css, ISerializableObject, Icon } from 'office-ui-fabric-react';
import { IFieldRendererProps } from '../fieldCommon/IFieldRendererProps';
import { FileTypeIcon, IconType } from '../../fileTypeIcon';
import * as appInsights from '../../../common/appInsights';

import styles from './FieldFileTypeRenderer.module.scss';
import { findIndex } from '@microsoft/sp-lodash-subset';

export interface IFieldFileTypeRendererProps extends IFieldRendererProps {
  /**
   * file/document path
   */
  path: string;
  /**
   * true if the icon should be rendered for a folder, not file
   */
  isFolder?: boolean;
}

/**
 * For future
 */
export interface IFieldFileTypeRendererState {

}

/**
 * File Type Renderer.
 * Used for:
 *   - File/Document Type
 */
export class FieldFileTypeRenderer extends React.Component<IFieldFileTypeRendererProps, IFieldFileTypeRendererState> {
  public constructor(props: IFieldFileTypeRendererProps, state: IFieldFileTypeRendererState) {
    super(props, state);

    appInsights.track('FieldFileTypeRenderer', {});

    this.state = {};
  }

  @override
  public render(): JSX.Element {
    const optionalStyles: ISerializableObject = {
    };
    optionalStyles[styles.folder] = this.props.isFolder;
    return (
      <div className={css(this.props.className, styles.container, styles.fabricIcon, optionalStyles)} style={this.props.cssProps}>
        {this.props.isFolder ? <Icon iconName={'FabricFolderFill'} /> : <FileTypeIcon type={IconType.font} path={this.props.path} />}
      </div>
    );
  }
}
