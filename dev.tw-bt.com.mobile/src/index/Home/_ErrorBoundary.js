/**
 * 首页错误边界组件
 * @Author: AI Assistant
 * @Date: 2025-07-18
 * @Path: src/index/Home/_ErrorBoundary.js
 */
'use strict';

import React from 'react';
import { Button } from 'antd-mobile';
import classNames from 'classnames';
import Styles from 'styles';
import Utils from 'utils';

const prefixCls = 'styles-error-boundary';

class _ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
            retryCount: 0
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo
        });

        // 错误上报（可以集成到现有的错误监控系统）
        if (typeof window !== 'undefined') {
            console.error('首页组件错误:', error, errorInfo);
            
            // 可以在这里添加错误上报逻辑
            // Utils.reportError('HomePage', error, errorInfo);
        }
    }

    handleRetry = () => {
        const { retryCount } = this.state;
        const { maxRetries = 3 } = this.props;

        if (retryCount < maxRetries) {
            this.setState({
                hasError: false,
                error: null,
                errorInfo: null,
                retryCount: retryCount + 1
            });
        } else {
            Utils.light('重试次数过多，请刷新页面');
        }
    };

    handleRefresh = () => {
        if (typeof window !== 'undefined') {
            window.location.reload();
        }
    };

    render() {
        const { hasError, retryCount } = this.state;
        const { children, fallback, maxRetries = 3, className } = this.props;

        if (hasError) {
            // 如果提供了自定义fallback，使用它
            if (fallback) {
                return fallback;
            }

            // 默认错误UI
            return (
                <div className={classNames(prefixCls, className)}>
                    <div className="error-container">
                        <div className="error-icon">⚠️</div>
                        <h3 className="error-title">页面加载出错了</h3>
                        <p className="error-message">
                            抱歉，页面遇到了一些问题。您可以尝试重新加载或刷新页面。
                        </p>
                        
                        <div className="error-actions">
                            {retryCount < maxRetries && (
                                <Button
                                    type="primary"
                                    size="small"
                                    onClick={this.handleRetry}
                                    className="retry-btn"
                                >
                                    重试 ({maxRetries - retryCount}次机会)
                                </Button>
                            )}
                            
                            <Button
                                type="ghost"
                                size="small"
                                onClick={this.handleRefresh}
                                className="refresh-btn"
                            >
                                刷新页面
                            </Button>
                        </div>

                        {process.env.NODE_ENV === 'development' && (
                            <details className="error-details">
                                <summary>错误详情 (开发模式)</summary>
                                <pre className="error-stack">
                                    {this.state.error && this.state.error.toString()}
                                    <br />
                                    {this.state.errorInfo.componentStack}
                                </pre>
                            </details>
                        )}
                    </div>

                    <style jsx>{`
                        .${prefixCls} {
                            min-height: 50vh;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: ${Styles.space};
                            background: #fff;
                        }
                        .error-container {
                            text-align: center;
                            max-width: 400px;
                            width: 100%;
                        }
                        .error-icon {
                            font-size: 3rem;
                            margin-bottom: ${Styles.md};
                        }
                        .error-title {
                            color: ${Styles.color_font_title};
                            font-size: 1.2rem;
                            margin-bottom: ${Styles.sm};
                            font-weight: 500;
                        }
                        .error-message {
                            color: ${Styles.color_font_desc};
                            line-height: 1.5;
                            margin-bottom: ${Styles.lg};
                        }
                        .error-actions {
                            display: flex;
                            gap: ${Styles.sm};
                            justify-content: center;
                            flex-wrap: wrap;
                        }
                        .error-details {
                            margin-top: ${Styles.lg};
                            text-align: left;
                            background: #f5f5f5;
                            padding: ${Styles.sm};
                            border-radius: 4px;
                            border: 1px solid ${Styles.color_border};
                        }
                        .error-stack {
                            font-size: 0.8rem;
                            color: #666;
                            white-space: pre-wrap;
                            word-break: break-all;
                        }
                        :global(.retry-btn) {
                            margin-right: ${Styles.sm};
                        }
                    `}</style>
                </div>
            );
        }

        return children;
    }
}

export default _ErrorBoundary;
