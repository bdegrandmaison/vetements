import React from 'react';

import { KeystoneProvider } from '@keystone-next/admin-ui/context';
import { ErrorBoundary } from '@keystone-next/admin-ui/components';
import { Core } from '@keystone-ui/core';

import * as view5f4cb8ff from '../../../node_modules/@keystone-next/fields/types/mongoId/views';
import * as view3e70d93f from '../../../node_modules/@keystone-next/fields/types/integer/views';
import * as view01618a5a from '../../../node_modules/@keystone-next/fields/types/relationship/views';
import * as view79d92a4e from '../../../node_modules/@keystone-next/fields/types/text/views';
import * as viewd90552ac from '../../../node_modules/@keystone-next/fields/types/virtual/views';
import * as view44b88c90 from '../../../node_modules/@keystone-next/fields/types/password/views';
import * as view2f2e1a9b from '../../../node_modules/@keystone-next/fields/types/timestamp/views';
import * as view1e66a798 from '../../../node_modules/@keystone-next/fields/types/select/views';
import * as viewd3913546 from '../../../node_modules/@keystone-next/cloudinary/views';
import * as view592a8dd6 from '../../../node_modules/@keystone-next/fields/types/checkbox/views';

const adminConfig = {};

const fieldViews = {
  view5f4cb8ff,
  view3e70d93f,
  view01618a5a,
  view79d92a4e,
  viewd90552ac,
  view44b88c90,
  view2f2e1a9b,
  view1e66a798,
  viewd3913546,
  view592a8dd6,
};

const lazyMetadataQuery = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'keystone',
              loc: { start: 22, end: 30 },
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'adminMeta',
                    loc: { start: 39, end: 48 },
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'lists',
                          loc: { start: 59, end: 64 },
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'key',
                                loc: { start: 77, end: 80 },
                              },
                              arguments: [],
                              directives: [],
                              loc: { start: 77, end: 80 },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'isHidden',
                                loc: { start: 91, end: 99 },
                              },
                              arguments: [],
                              directives: [],
                              loc: { start: 91, end: 99 },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'fields',
                                loc: { start: 110, end: 116 },
                              },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'path',
                                      loc: { start: 131, end: 135 },
                                    },
                                    arguments: [],
                                    directives: [],
                                    loc: { start: 131, end: 135 },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'createView',
                                      loc: { start: 148, end: 158 },
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'fieldMode',
                                            loc: { start: 175, end: 184 },
                                          },
                                          arguments: [],
                                          directives: [],
                                          loc: { start: 175, end: 184 },
                                        },
                                      ],
                                      loc: { start: 159, end: 198 },
                                    },
                                    loc: { start: 148, end: 198 },
                                  },
                                ],
                                loc: { start: 117, end: 210 },
                              },
                              loc: { start: 110, end: 210 },
                            },
                          ],
                          loc: { start: 65, end: 220 },
                        },
                        loc: { start: 59, end: 220 },
                      },
                    ],
                    loc: { start: 49, end: 228 },
                  },
                  loc: { start: 39, end: 228 },
                },
              ],
              loc: { start: 31, end: 234 },
            },
            loc: { start: 22, end: 234 },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authenticatedItem' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'User' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};

export default function App({ Component, pageProps }) {
  return (
    <Core>
      <KeystoneProvider
        adminConfig={adminConfig}
        adminMetaHash="mb1okm"
        fieldViews={fieldViews}
        lazyMetadataQuery={lazyMetadataQuery}
      >
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </KeystoneProvider>
    </Core>
  );
}
