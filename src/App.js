// React imports
import React, { Component, Fragment } from 'react';

// Other NPM imports
import { Translation } from 'react-i18next';

// Local project (JavaScript) imports
import NestedComponent from './components/nestedComponent';
import TranslationProvider from './components/TranslationComponent';
import './helpers/translations/i18n';

class App extends Component {
    render(){
        return (
            <Fragment>
                <h1>Language = "BOS"</h1>
                <h2>From t() function</h2>
                <Translation lng="bos" ns="cbo">
                    {
                        (t) => (
                            <Fragment>
                                <ul>
                                    <li>{t('test1')}</li>
                                    <li>{t('test2')}</li>
                                    <li>{t('test3')}</li>
                                </ul>
                                <h2>Using namespace prefixes (namespace="CBO")</h2>
                                <ul>
                                    <li>From English namespace: {t('cbo:test1')}</li>
                                    <li>From English namespace: {t('cbo:test2')}</li>
                                    <li>From English namespace: {t('cbo:test3')}</li>
                                </ul>
                                <h2>Using namespace prefixes (namespace="O4B")</h2>
                                <ul>
                                    <li>From English namespace: {t('o4b:test1')}</li>
                                    <li>From English namespace: {t('o4b:test2')}</li>
                                    <li>From English namespace: {t('o4b:test3')}</li>
                                </ul>
                                <h2>Using namespace prefixes (namespace="retail")</h2>
                                <ul>
                                    <li>From English namespace: {t('retail:test1')}</li>
                                    <li>From English namespace: {t('retail:test2')}</li>
                                    <li>From English namespace: {t('retail:test3')}</li>
                                </ul>
                                <h2>From &lt;TranslationProvider&gt;</h2>
                                <TranslationProvider translate={t}>
                                    <NestedComponent />
                                </TranslationProvider>
                            </Fragment>
                        )
                    }
                </Translation>
                <hr />
                <h1>Language = "Lloyds"</h1>
                <h2>From t() function</h2>
                <Translation lng="lloyds" ns="cbo">
                    {
                        (t) => (
                            <Fragment>
                                <ul>
                                    <li>{t('test1')}</li>
                                    <li>{t('test2')}</li>
                                    <li>{t('test3')}</li>
                                </ul>
                                <h2>Using namespace prefixes (namespace="CBO")</h2>
                                <ul>
                                    <li>From English namespace: {t('cbo:test1')}</li>
                                    <li>From English namespace: {t('cbo:test2')}</li>
                                    <li>From English namespace: {t('cbo:test3')}</li>
                                </ul>
                                <h2>Using namespace prefixes (namespace="O4B")</h2>
                                <ul>
                                    <li>From English namespace: {t('o4b:test1')}</li>
                                    <li>From English namespace: {t('o4b:test2')}</li>
                                    <li>From English namespace: {t('o4b:test3')}</li>
                                </ul>
                                <h2>Using namespace prefixes (namespace="retail")</h2>
                                <ul>
                                    <li>From English namespace: {t('retail:test1')}</li>
                                    <li>From English namespace: {t('retail:test2')}</li>
                                    <li>From English namespace: {t('retail:test3')}</li>
                                </ul>
                                <h2>From &lt;TranslationProvider&gt;</h2>
                                <TranslationProvider translate={t}>
                                    <NestedComponent />
                                </TranslationProvider>
                            </Fragment>
                        )
                    }
                </Translation>

                {/* 
                <NamespacesConsumer ns={'englishTop10'}>
                    {t => (
                        <Fragment>
                            <ul>
                                <li>{t('top10.one')}</li>
                                <li>{t('top10.two')}</li>
                                <li>{t('top10.three')}</li>
                                <li>{t('top10.four')}</li>
                                <li>{t('top10.five')}</li>
                                <li>{t('top10.six')}</li>
                                <li>{t('top10.seven')}</li>
                                <li>{t('top10.eight')}</li>
                                <li>{t('top10.nine')}</li>
                                <li>{t('top10.ten')}</li>
                            </ul>
                            <h2>Using namespace prefixes</h2>
                            <ul>
                                <li>From English namespace: {t('englishTop10:top10.ten')}</li>
                                <li>From French namespace: {t('frenchTop10:top10.ten')}</li>
                            </ul>
                            <h2>From &lt;TranslationProvider&gt;</h2>
                            <TranslationProvider translate={t}>
                                <NestedComponent />
                            </TranslationProvider>
                        </Fragment>
                    )}
                </NamespacesConsumer>
                <hr />
                <h1>French top 10</h1>
                <h2>From t() function</h2>
                <NamespacesConsumer ns={'frenchTop10'}>
                    {t => (
                        <Fragment>
                            <ul>
                                <li>{t('top10.one')}</li>
                                <li>{t('top10.two')}</li>
                                <li>{t('top10.three')}</li>
                                <li>{t('top10.four')}</li>
                                <li>{t('top10.five')}</li>
                                <li>{t('top10.six')}</li>
                                <li>{t('top10.seven')}</li>
                                <li>{t('top10.eight')}</li>
                                <li>{t('top10.nine')}</li>
                                <li>{t('top10.ten')}</li>
                            </ul>
                            <h2>From &lt;TranslationProvider&gt;</h2>
                            <TranslationProvider translate={t}>
                                <NestedComponent />
                            </TranslationProvider>
                        </Fragment>
                    )}
                </NamespacesConsumer>
                */}
            </Fragment>
        );
    }
}

export default App;