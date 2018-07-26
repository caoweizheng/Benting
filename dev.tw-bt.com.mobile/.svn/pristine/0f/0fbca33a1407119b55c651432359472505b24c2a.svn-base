/**
 * const prefixCls = 'styles-13300616';
 * const images = '/static/images/code/btWap';
 * @Author: Jack
 * @Date:   2018-02-26 13:34:16
 * @Last Modified by: cwz0525
 * @Last Modified time: 2018-07-26 17:07:13
 * @Path nidosport E:\code\btWap\server.js
 */
'use strict';

const express = require('express');
const next = require('next');
const mobxReact = require('mobx-react');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const child_process = require('child_process');

mobxReact.useStaticRendering(true);

app
    .prepare()
    .then(() => {
        const server = express();

        server.get('/build', (req, res) => {
            var data = '';

            var child = child_process.execFile(
                '/data/vhost/web/home_test/build.sh',
                (error, stdout, stderr) => {
                    data = stdout;
                }
            );

            child.on('close', (code, signal) => {
                console.log(data);
                res.send(data);
            });
        });

        /*==================== index ====================*/
        server.get('/chat(/:id)', (req, res) => {
            app.render(req, res, '/chat', req.params);
        });

        /*==================== member ====================*/
        server.get('/member/register/:id', (req, res) => {
            app.render(req, res, '/member/register', req.params);
        });

        /*==================== merchant ====================*/
        server.get('/merchant/detail/:id', (req, res) => {
            app.render(req, res, '/merchant/detail', req.params);
        });

        /*==================== shop ====================*/
        server.get('/shop/category/:id', (req, res) => {
            app.render(req, res, '/shop/category', req.params);
        });

        server.get('/shop/goods/:id', (req, res) => {
            app.render(req, res, '/shop/goods', req.params);
        });

        server.get('/shop/coupon', (req, res) => {
            app.render(req, res, '/shop/coupon', req.params);
        });

        server.get('/shop/miaosha', (req, res) => {
            app.render(req, res, '/shop/miaosha', req.params);
        });

        server.get('/shop/miaosha/detail/:id', (req, res) => {
            app.render(req, res, '/shop/miaosha/detail', req.params);
        });

        server.get('/shop/jianlou', (req, res) => {
            app.render(req, res, '/shop/jianlou', req.params);
        });

        server.get('/shop/jianlou/detail/:id', (req, res) => {
            app.render(req, res, '/shop/jianlou/detail', req.params);
        });

        server.get('/shop/auction', (req, res) => {
            app.render(req, res, '/shop/auction', req.params);
        });

        server.get('/shop/auction/detail/:id', (req, res) => {
            app.render(req, res, '/shop/auction/detail', req.params);
        });

        server.get('/shop/multi_auction/:id', (req, res) => {
            app.render(req, res, '/shop/multiAuction', req.params);
        });

        server.get('/shop(/:id)', (req, res) => {
            app.render(req, res, '/shop/index', req.params);
        });

        /*==================== bbs ====================*/
        server.get('/bbs/post/:id(/:postId)', (req, res) => {
            app.render(req, res, '/bbs/post', req.params);
        });

        server.get('/bbs/post/:id', (req, res) => {
            app.render(req, res, '/bbs/post', req.params);
        });

        server.get('/bbs/block/:id', (req, res) => {
            app.render(req, res, '/bbs/block', req.params);
        });

        server.get('/bbs/article/:id', (req, res) => {
            app.render(req, res, '/bbs/article', req.params);
        });

        server.get('/bbs/registration/:id', (req, res) => {
            app.render(req, res, '/bbs/registration', req.params);
        });

        /*==================== information ====================*/
        server.get('/information/detail/:id', (req, res) => {
            app.render(req, res, '/information/detail', req.params);
        });

        server.get('/information/special', (req, res) => {
            app.render(req, res, '/information/special', req.params);
        });

        /*==================== video ====================*/
        server.get('/video/detail/:id', (req, res) => {
            app.render(req, res, '/video/detail', req.params);
        });

        server.get('/video/add', (req, res) => {
            app.render(req, res, '/video/add', req.params);
        });

        /*==================== person ====================*/
        server.get('/person/zone/:id', (req, res) => {
            app.render(req, res, '/person/zone', req.params);
        });

        server.get('/person/goods/detail/:id', (req, res) => {
            app.render(req, res, '/person/goods/detail', req.params);
        });

        server.get('/person/welfare/meet(/:id)', (req, res) => {
            app.render(req, res, '/person/welfare/meet', req.params);
        });

        server.get('/person/welfare/rank_up(/:id)', (req, res) => {
            app.render(req, res, '/person/welfare/rank_up', req.params);
        });

        //person event
        server.get('/person/event/get_prize/:id', (req, res) => {
            app.render(req, res, '/person/event/get_prize', req.params);
        });

        server.get('/person/event/my_floor/get_prize/:id', (req, res) => {
            app.render(
                req,
                res,
                '/person/event/my_floor/get_prize',
                req.params
            );
        });

        server.get('/person/event/my_miaosha/get_prize/:id', (req, res) => {
            app.render(
                req,
                res,
                '/person/event/my_miaosha/get_prize',
                req.params
            );
        });

        server.get('/person/event/registration/detail/:id', (req, res) => {
            app.render(req, res, '/person/event/registration/detail', req.params);
        });

        /*==================== address ====================*/
        server.get('/person/address/update/:id', (req, res) => {
            app.render(req, res, '/person/address/update', req.params);
        });
        server.get('/person/address/confirm/:id', (req, res) => {
            app.render(req, res, '/person/address/confirm', req.params);
        });

        /*==================== pay ====================*/
        server.get('/pay/result/:id', (req, res) => {
            app.render(req, res, '/pay/result', req.params);
        });

        //event
        server.get('/event/floor/detail/:id', (req, res) => {
            app.render(req, res, '/event/floor/detail', req.params);
        });
        server.get('/event/guess/detail/:id', (req, res) => {
            app.render(req, res, '/event/guess/detail', req.params);
        });

        /*==================== star ====================*/
        server.get('/star/detail/:id', (req, res) => {
            app.render(req, res, '/star/detail', req.params);
        });

        server.get('/rewardrank/:id/:type', (req, res) => {
            app.render(req, res, '/rewardrank', req.params);
        });

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(8201, err => {
            if (err) throw err;
            console.log('> Ready on http://localhost:8201');
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });
