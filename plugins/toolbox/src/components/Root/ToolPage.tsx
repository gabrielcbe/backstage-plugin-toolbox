import React, { Suspense } from 'react';
import { ToolsPageProps } from './ToolsPage';
import { defaultTools } from './tools';
import { useParams } from 'react-router-dom';
import { ContentHeader } from '@backstage/core-components';
import { useStyles } from '../../utils/hooks';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useToolboxTranslation } from '../../hooks';

export const ToolPage = (props: ToolsPageProps) => {
  const { extraTools } = props;
  const params = useParams();
  const { classes } = useStyles();
  const { t } = useToolboxTranslation();
  // Override type as `tool.${tool.id}.name` would require Tool type to be union type of all tools id
  const intl = t as (str: string ) => string | undefined

  const allTools = [...(extraTools ?? []), ...defaultTools];
  const tool = allTools.find(({ id }) => id === params.id);
  if (!tool) {
    return <>{t('toolPage.toolNotAvailable')}</>;
  }
  return (
    <div id="toolContainer" className={classes.toolContainer}>
      <Suspense
        fallback={
          <Box
            display="flex"
            width="100%"
            height="50%"
            alignItems="center"
            justifyContent="center"
          >
            <CircularProgress />
          </Box>
        }
      >
        <ContentHeader
          title={`${tool.category} - ${intl(`tool.${tool.id}.name`) ?? tool.name}`}
          description={intl(`tool.${tool.id}.description`) ?? tool.description}
        >
          {tool.headerButtons}
        </ContentHeader>
        {tool.component}
      </Suspense>
    </div>
  );
};
