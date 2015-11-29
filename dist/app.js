webpackJsonp([1,2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(369);


/***/ },

/***/ 369:
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/_custom.d.ts" />
	var angular2_1 = __webpack_require__(17);
	var router_1 = __webpack_require__(370);
	var http_1 = __webpack_require__(392);
	var app_1 = __webpack_require__(408);
	angular2_1.bootstrap(app_1.App, [
	    angular2_1.FORM_PROVIDERS,
	    router_1.ROUTER_PROVIDERS,
	    http_1.HTTP_PROVIDERS,
	    angular2_1.ELEMENT_PROBE_PROVIDERS
	]);


/***/ },

/***/ 370:
/***/ function(module, exports, __webpack_require__) {

	'use strict';/**
	 * @module
	 * @description
	 * Maps application URLs into application states, to support deep-linking and navigation.
	 */
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var router_1 = __webpack_require__(371);
	exports.Router = router_1.Router;
	var router_outlet_1 = __webpack_require__(375);
	exports.RouterOutlet = router_outlet_1.RouterOutlet;
	var router_link_1 = __webpack_require__(377);
	exports.RouterLink = router_link_1.RouterLink;
	var instruction_1 = __webpack_require__(372);
	exports.RouteParams = instruction_1.RouteParams;
	exports.RouteData = instruction_1.RouteData;
	var route_registry_1 = __webpack_require__(380);
	exports.RouteRegistry = route_registry_1.RouteRegistry;
	var location_strategy_1 = __webpack_require__(379);
	exports.LocationStrategy = location_strategy_1.LocationStrategy;
	var hash_location_strategy_1 = __webpack_require__(389);
	exports.HashLocationStrategy = hash_location_strategy_1.HashLocationStrategy;
	var path_location_strategy_1 = __webpack_require__(390);
	exports.PathLocationStrategy = path_location_strategy_1.PathLocationStrategy;
	var location_1 = __webpack_require__(378);
	exports.Location = location_1.Location;
	exports.APP_BASE_HREF = location_1.APP_BASE_HREF;
	__export(__webpack_require__(388));
	__export(__webpack_require__(391));
	var lifecycle_annotations_1 = __webpack_require__(376);
	exports.CanActivate = lifecycle_annotations_1.CanActivate;
	var instruction_2 = __webpack_require__(372);
	exports.Instruction = instruction_2.Instruction;
	exports.ComponentInstruction = instruction_2.ComponentInstruction;
	var angular2_1 = __webpack_require__(17);
	exports.OpaqueToken = angular2_1.OpaqueToken;
	var location_strategy_2 = __webpack_require__(379);
	var path_location_strategy_2 = __webpack_require__(390);
	var router_2 = __webpack_require__(371);
	var router_outlet_2 = __webpack_require__(375);
	var router_link_2 = __webpack_require__(377);
	var route_registry_2 = __webpack_require__(380);
	var location_2 = __webpack_require__(378);
	var angular2_2 = __webpack_require__(17);
	var lang_1 = __webpack_require__(21);
	var exceptions_1 = __webpack_require__(177);
	/**
	 * Token used to bind the component with the top-level {@link RouteConfig}s for the
	 * application.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
	 *
	 * ```
	 * import {Component} from 'angular2/angular2';
	 * import {
	 *   ROUTER_DIRECTIVES,
	 *   ROUTER_PROVIDERS,
	 *   RouteConfig
	 * } from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   // ...
	 * }
	 *
	 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
	 * ```
	 */
	exports.ROUTER_PRIMARY_COMPONENT = lang_1.CONST_EXPR(new angular2_2.OpaqueToken('RouterPrimaryComponent'));
	/**
	 * A list of directives. To use the router directives like {@link RouterOutlet} and
	 * {@link RouterLink}, add this to your `directives` array in the {@link View} decorator of your
	 * component.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
	 *
	 * ```
	 * import {Component} from 'angular2/angular2';
	 * import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *    // ...
	 * }
	 *
	 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
	 * ```
	 */
	exports.ROUTER_DIRECTIVES = lang_1.CONST_EXPR([router_outlet_2.RouterOutlet, router_link_2.RouterLink]);
	/**
	 * A list of {@link Provider}s. To use the router, you must add this to your application.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
	 *
	 * ```
	 * import {Component} from 'angular2/angular2';
	 * import {
	 *   ROUTER_DIRECTIVES,
	 *   ROUTER_PROVIDERS,
	 *   RouteConfig
	 * } from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   // ...
	 * }
	 *
	 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
	 * ```
	 */
	exports.ROUTER_PROVIDERS = lang_1.CONST_EXPR([
	    route_registry_2.RouteRegistry,
	    lang_1.CONST_EXPR(new angular2_2.Provider(location_strategy_2.LocationStrategy, { useClass: path_location_strategy_2.PathLocationStrategy })),
	    location_2.Location,
	    lang_1.CONST_EXPR(new angular2_2.Provider(router_2.Router, {
	        useFactory: routerFactory,
	        deps: lang_1.CONST_EXPR([route_registry_2.RouteRegistry, location_2.Location, exports.ROUTER_PRIMARY_COMPONENT, angular2_2.ApplicationRef])
	    })),
	    lang_1.CONST_EXPR(new angular2_2.Provider(exports.ROUTER_PRIMARY_COMPONENT, { useFactory: routerPrimaryComponentFactory, deps: lang_1.CONST_EXPR([angular2_2.ApplicationRef]) }))
	]);
	/**
	 * @deprecated
	 */
	exports.ROUTER_BINDINGS = exports.ROUTER_PROVIDERS;
	function routerFactory(registry, location, primaryComponent, appRef) {
	    var rootRouter = new router_2.RootRouter(registry, location, primaryComponent);
	    appRef.registerDisposeListener(function () { return rootRouter.dispose(); });
	    return rootRouter;
	}
	function routerPrimaryComponentFactory(app) {
	    if (app.componentTypes.length == 0) {
	        throw new exceptions_1.BaseException("Bootstrap at least one component before injecting Router.");
	    }
	    return app.componentTypes[0];
	}
	//# sourceMappingURL=router.js.map

/***/ },

/***/ 371:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var async_1 = __webpack_require__(22);
	var collection_1 = __webpack_require__(175);
	var lang_1 = __webpack_require__(21);
	var exceptions_1 = __webpack_require__(177);
	var instruction_1 = __webpack_require__(372);
	var route_lifecycle_reflector_1 = __webpack_require__(373);
	var _resolveToTrue = async_1.PromiseWrapper.resolve(true);
	var _resolveToFalse = async_1.PromiseWrapper.resolve(false);
	/**
	 * The `Router` is responsible for mapping URLs to components.
	 *
	 * You can see the state of the router by inspecting the read-only field `router.navigating`.
	 * This may be useful for showing a spinner, for instance.
	 *
	 * ## Concepts
	 *
	 * Routers and component instances have a 1:1 correspondence.
	 *
	 * The router holds reference to a number of {@link RouterOutlet}.
	 * An outlet is a placeholder that the router dynamically fills in depending on the current URL.
	 *
	 * When the router navigates from a URL, it must first recognize it and serialize it into an
	 * `Instruction`.
	 * The router uses the `RouteRegistry` to get an `Instruction`.
	 */
	var Router = (function () {
	    function Router(registry, parent, hostComponent) {
	        this.registry = registry;
	        this.parent = parent;
	        this.hostComponent = hostComponent;
	        this.navigating = false;
	        this._currentInstruction = null;
	        this._currentNavigation = _resolveToTrue;
	        this._outlet = null;
	        this._auxRouters = new collection_1.Map();
	        this._subject = new async_1.EventEmitter();
	    }
	    /**
	     * Constructs a child router. You probably don't need to use this unless you're writing a reusable
	     * component.
	     */
	    Router.prototype.childRouter = function (hostComponent) {
	        return this._childRouter = new ChildRouter(this, hostComponent);
	    };
	    /**
	     * Constructs a child router. You probably don't need to use this unless you're writing a reusable
	     * component.
	     */
	    Router.prototype.auxRouter = function (hostComponent) { return new ChildRouter(this, hostComponent); };
	    /**
	     * Register an outlet to notified of primary route changes.
	     *
	     * You probably don't need to use this unless you're writing a reusable component.
	     */
	    Router.prototype.registerPrimaryOutlet = function (outlet) {
	        if (lang_1.isPresent(outlet.name)) {
	            throw new exceptions_1.BaseException("registerPrimaryOutlet expects to be called with an unnamed outlet.");
	        }
	        this._outlet = outlet;
	        if (lang_1.isPresent(this._currentInstruction)) {
	            return this.commit(this._currentInstruction, false);
	        }
	        return _resolveToTrue;
	    };
	    /**
	     * Register an outlet to notified of auxiliary route changes.
	     *
	     * You probably don't need to use this unless you're writing a reusable component.
	     */
	    Router.prototype.registerAuxOutlet = function (outlet) {
	        var outletName = outlet.name;
	        if (lang_1.isBlank(outletName)) {
	            throw new exceptions_1.BaseException("registerAuxOutlet expects to be called with an outlet with a name.");
	        }
	        // TODO...
	        // what is the host of an aux route???
	        var router = this.auxRouter(this.hostComponent);
	        this._auxRouters.set(outletName, router);
	        router._outlet = outlet;
	        var auxInstruction;
	        if (lang_1.isPresent(this._currentInstruction) &&
	            lang_1.isPresent(auxInstruction = this._currentInstruction.auxInstruction[outletName])) {
	            return router.commit(auxInstruction);
	        }
	        return _resolveToTrue;
	    };
	    /**
	     * Given an instruction, returns `true` if the instruction is currently active,
	     * otherwise `false`.
	     */
	    Router.prototype.isRouteActive = function (instruction) {
	        var router = this;
	        while (lang_1.isPresent(router.parent) && lang_1.isPresent(instruction.child)) {
	            router = router.parent;
	            instruction = instruction.child;
	        }
	        return lang_1.isPresent(this._currentInstruction) &&
	            this._currentInstruction.component == instruction.component;
	    };
	    /**
	     * Dynamically update the routing configuration and trigger a navigation.
	     *
	     *##Usage
	     *
	     * ```
	     * router.config([
	     *   { 'path': '/', 'component': IndexComp },
	     *   { 'path': '/user/:id', 'component': UserComp },
	     * ]);
	     * ```
	     */
	    Router.prototype.config = function (definitions) {
	        var _this = this;
	        definitions.forEach(function (routeDefinition) { _this.registry.config(_this.hostComponent, routeDefinition); });
	        return this.renavigate();
	    };
	    /**
	     * Navigate based on the provided Route Link DSL. It's preferred to navigate with this method
	     * over `navigateByUrl`.
	     *
	     *##Usage
	     *
	     * This method takes an array representing the Route Link DSL:
	     * ```
	     * ['./MyCmp', {param: 3}]
	     * ```
	     * See the {@link RouterLink} directive for more.
	     */
	    Router.prototype.navigate = function (linkParams) {
	        var instruction = this.generate(linkParams);
	        return this.navigateByInstruction(instruction, false);
	    };
	    /**
	     * Navigate to a URL. Returns a promise that resolves when navigation is complete.
	     * It's preferred to navigate with `navigate` instead of this method, since URLs are more brittle.
	     *
	     * If the given URL begins with a `/`, router will navigate absolutely.
	     * If the given URL does not begin with `/`, the router will navigate relative to this component.
	     */
	    Router.prototype.navigateByUrl = function (url, _skipLocationChange) {
	        var _this = this;
	        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
	        return this._currentNavigation = this._currentNavigation.then(function (_) {
	            _this.lastNavigationAttempt = url;
	            _this._startNavigating();
	            return _this._afterPromiseFinishNavigating(_this.recognize(url).then(function (instruction) {
	                if (lang_1.isBlank(instruction)) {
	                    return false;
	                }
	                return _this._navigate(instruction, _skipLocationChange);
	            }));
	        });
	    };
	    /**
	     * Navigate via the provided instruction. Returns a promise that resolves when navigation is
	     * complete.
	     */
	    Router.prototype.navigateByInstruction = function (instruction, _skipLocationChange) {
	        var _this = this;
	        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
	        if (lang_1.isBlank(instruction)) {
	            return _resolveToFalse;
	        }
	        return this._currentNavigation = this._currentNavigation.then(function (_) {
	            _this._startNavigating();
	            return _this._afterPromiseFinishNavigating(_this._navigate(instruction, _skipLocationChange));
	        });
	    };
	    /** @internal */
	    Router.prototype._navigate = function (instruction, _skipLocationChange) {
	        var _this = this;
	        return this._settleInstruction(instruction)
	            .then(function (_) { return _this._canReuse(instruction); })
	            .then(function (_) { return _this._canActivate(instruction); })
	            .then(function (result) {
	            if (!result) {
	                return false;
	            }
	            return _this._canDeactivate(instruction)
	                .then(function (result) {
	                if (result) {
	                    return _this.commit(instruction, _skipLocationChange)
	                        .then(function (_) {
	                        _this._emitNavigationFinish(instruction_1.stringifyInstruction(instruction));
	                        return true;
	                    });
	                }
	            });
	        });
	    };
	    // TODO(btford): it'd be nice to remove this method as part of cleaning up the traversal logic
	    // Since refactoring `Router.generate` to return an instruction rather than a string, it's not
	    // guaranteed that the `componentType`s for the terminal async routes have been loaded by the time
	    // we begin navigation. The method below simply traverses instructions and resolves any components
	    // for which `componentType` is not present
	    /** @internal */
	    Router.prototype._settleInstruction = function (instruction) {
	        var _this = this;
	        var unsettledInstructions = [];
	        if (lang_1.isBlank(instruction.component.componentType)) {
	            unsettledInstructions.push(instruction.component.resolveComponentType().then(function (type) { _this.registry.configFromComponent(type); }));
	        }
	        if (lang_1.isPresent(instruction.child)) {
	            unsettledInstructions.push(this._settleInstruction(instruction.child));
	        }
	        collection_1.StringMapWrapper.forEach(instruction.auxInstruction, function (instruction, _) {
	            unsettledInstructions.push(_this._settleInstruction(instruction));
	        });
	        return async_1.PromiseWrapper.all(unsettledInstructions);
	    };
	    Router.prototype._emitNavigationFinish = function (url) { async_1.ObservableWrapper.callNext(this._subject, url); };
	    Router.prototype._afterPromiseFinishNavigating = function (promise) {
	        var _this = this;
	        return async_1.PromiseWrapper.catchError(promise.then(function (_) { return _this._finishNavigating(); }), function (err) {
	            _this._finishNavigating();
	            throw err;
	        });
	    };
	    /*
	     * Recursively set reuse flags
	     */
	    /** @internal */
	    Router.prototype._canReuse = function (instruction) {
	        var _this = this;
	        if (lang_1.isBlank(this._outlet)) {
	            return _resolveToFalse;
	        }
	        return this._outlet.canReuse(instruction.component)
	            .then(function (result) {
	            instruction.component.reuse = result;
	            if (result && lang_1.isPresent(_this._childRouter) && lang_1.isPresent(instruction.child)) {
	                return _this._childRouter._canReuse(instruction.child);
	            }
	        });
	    };
	    Router.prototype._canActivate = function (nextInstruction) {
	        return canActivateOne(nextInstruction, this._currentInstruction);
	    };
	    Router.prototype._canDeactivate = function (instruction) {
	        var _this = this;
	        if (lang_1.isBlank(this._outlet)) {
	            return _resolveToTrue;
	        }
	        var next;
	        var childInstruction = null;
	        var reuse = false;
	        var componentInstruction = null;
	        if (lang_1.isPresent(instruction)) {
	            childInstruction = instruction.child;
	            componentInstruction = instruction.component;
	            reuse = instruction.component.reuse;
	        }
	        if (reuse) {
	            next = _resolveToTrue;
	        }
	        else {
	            next = this._outlet.canDeactivate(componentInstruction);
	        }
	        // TODO: aux route lifecycle hooks
	        return next.then(function (result) {
	            if (result == false) {
	                return false;
	            }
	            if (lang_1.isPresent(_this._childRouter)) {
	                return _this._childRouter._canDeactivate(childInstruction);
	            }
	            return true;
	        });
	    };
	    /**
	     * Updates this router and all descendant routers according to the given instruction
	     */
	    Router.prototype.commit = function (instruction, _skipLocationChange) {
	        var _this = this;
	        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
	        this._currentInstruction = instruction;
	        var next = _resolveToTrue;
	        if (lang_1.isPresent(this._outlet)) {
	            var componentInstruction = instruction.component;
	            if (componentInstruction.reuse) {
	                next = this._outlet.reuse(componentInstruction);
	            }
	            else {
	                next =
	                    this.deactivate(instruction).then(function (_) { return _this._outlet.activate(componentInstruction); });
	            }
	            if (lang_1.isPresent(instruction.child)) {
	                next = next.then(function (_) {
	                    if (lang_1.isPresent(_this._childRouter)) {
	                        return _this._childRouter.commit(instruction.child);
	                    }
	                });
	            }
	        }
	        var promises = [];
	        this._auxRouters.forEach(function (router, name) {
	            if (lang_1.isPresent(instruction.auxInstruction[name])) {
	                promises.push(router.commit(instruction.auxInstruction[name]));
	            }
	        });
	        return next.then(function (_) { return async_1.PromiseWrapper.all(promises); });
	    };
	    /** @internal */
	    Router.prototype._startNavigating = function () { this.navigating = true; };
	    /** @internal */
	    Router.prototype._finishNavigating = function () { this.navigating = false; };
	    /**
	     * Subscribe to URL updates from the router
	     */
	    Router.prototype.subscribe = function (onNext) {
	        return async_1.ObservableWrapper.subscribe(this._subject, onNext);
	    };
	    /**
	     * Removes the contents of this router's outlet and all descendant outlets
	     */
	    Router.prototype.deactivate = function (instruction) {
	        var _this = this;
	        var childInstruction = null;
	        var componentInstruction = null;
	        if (lang_1.isPresent(instruction)) {
	            childInstruction = instruction.child;
	            componentInstruction = instruction.component;
	        }
	        var next = _resolveToTrue;
	        if (lang_1.isPresent(this._childRouter)) {
	            next = this._childRouter.deactivate(childInstruction);
	        }
	        if (lang_1.isPresent(this._outlet)) {
	            next = next.then(function (_) { return _this._outlet.deactivate(componentInstruction); });
	        }
	        // TODO: handle aux routes
	        return next;
	    };
	    /**
	     * Given a URL, returns an instruction representing the component graph
	     */
	    Router.prototype.recognize = function (url) {
	        return this.registry.recognize(url, this.hostComponent);
	    };
	    /**
	     * Navigates to either the last URL successfully navigated to, or the last URL requested if the
	     * router has yet to successfully navigate.
	     */
	    Router.prototype.renavigate = function () {
	        if (lang_1.isBlank(this.lastNavigationAttempt)) {
	            return this._currentNavigation;
	        }
	        return this.navigateByUrl(this.lastNavigationAttempt);
	    };
	    /**
	     * Generate a URL from a component name and optional map of parameters. The URL is relative to the
	     * app's base href.
	     */
	    Router.prototype.generate = function (linkParams) {
	        var normalizedLinkParams = splitAndFlattenLinkParams(linkParams);
	        var first = collection_1.ListWrapper.first(normalizedLinkParams);
	        var rest = collection_1.ListWrapper.slice(normalizedLinkParams, 1);
	        var router = this;
	        // The first segment should be either '.' (generate from parent) or '' (generate from root).
	        // When we normalize above, we strip all the slashes, './' becomes '.' and '/' becomes ''.
	        if (first == '') {
	            while (lang_1.isPresent(router.parent)) {
	                router = router.parent;
	            }
	        }
	        else if (first == '..') {
	            router = router.parent;
	            while (collection_1.ListWrapper.first(rest) == '..') {
	                rest = collection_1.ListWrapper.slice(rest, 1);
	                router = router.parent;
	                if (lang_1.isBlank(router)) {
	                    throw new exceptions_1.BaseException("Link \"" + collection_1.ListWrapper.toJSON(linkParams) + "\" has too many \"../\" segments.");
	                }
	            }
	        }
	        else if (first != '.') {
	            // For a link with no leading `./`, `/`, or `../`, we look for a sibling and child.
	            // If both exist, we throw. Otherwise, we prefer whichever exists.
	            var childRouteExists = this.registry.hasRoute(first, this.hostComponent);
	            var parentRouteExists = lang_1.isPresent(this.parent) && this.registry.hasRoute(first, this.parent.hostComponent);
	            if (parentRouteExists && childRouteExists) {
	                var msg = "Link \"" + collection_1.ListWrapper.toJSON(linkParams) + "\" is ambiguous, use \"./\" or \"../\" to disambiguate.";
	                throw new exceptions_1.BaseException(msg);
	            }
	            if (parentRouteExists) {
	                router = this.parent;
	            }
	            rest = linkParams;
	        }
	        if (rest[rest.length - 1] == '') {
	            rest.pop();
	        }
	        if (rest.length < 1) {
	            var msg = "Link \"" + collection_1.ListWrapper.toJSON(linkParams) + "\" must include a route name.";
	            throw new exceptions_1.BaseException(msg);
	        }
	        var nextInstruction = this.registry.generate(rest, router.hostComponent);
	        var url = [];
	        var parent = router.parent;
	        while (lang_1.isPresent(parent)) {
	            url.unshift(parent._currentInstruction);
	            parent = parent.parent;
	        }
	        while (url.length > 0) {
	            nextInstruction = url.pop().replaceChild(nextInstruction);
	        }
	        return nextInstruction;
	    };
	    return Router;
	})();
	exports.Router = Router;
	var RootRouter = (function (_super) {
	    __extends(RootRouter, _super);
	    function RootRouter(registry, location, primaryComponent) {
	        var _this = this;
	        _super.call(this, registry, null, primaryComponent);
	        this._location = location;
	        this._locationSub = this._location.subscribe(function (change) { return _this.navigateByUrl(change['url'], lang_1.isPresent(change['pop'])); });
	        this.registry.configFromComponent(primaryComponent);
	        this.navigateByUrl(location.path());
	    }
	    RootRouter.prototype.commit = function (instruction, _skipLocationChange) {
	        var _this = this;
	        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
	        var emitPath = instruction_1.stringifyInstructionPath(instruction);
	        var emitQuery = instruction_1.stringifyInstructionQuery(instruction);
	        if (emitPath.length > 0) {
	            emitPath = '/' + emitPath;
	        }
	        var promise = _super.prototype.commit.call(this, instruction);
	        if (!_skipLocationChange) {
	            promise = promise.then(function (_) { _this._location.go(emitPath, emitQuery); });
	        }
	        return promise;
	    };
	    RootRouter.prototype.dispose = function () {
	        if (lang_1.isPresent(this._locationSub)) {
	            async_1.ObservableWrapper.dispose(this._locationSub);
	            this._locationSub = null;
	        }
	    };
	    return RootRouter;
	})(Router);
	exports.RootRouter = RootRouter;
	var ChildRouter = (function (_super) {
	    __extends(ChildRouter, _super);
	    function ChildRouter(parent, hostComponent) {
	        _super.call(this, parent.registry, parent, hostComponent);
	        this.parent = parent;
	    }
	    ChildRouter.prototype.navigateByUrl = function (url, _skipLocationChange) {
	        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
	        // Delegate navigation to the root router
	        return this.parent.navigateByUrl(url, _skipLocationChange);
	    };
	    ChildRouter.prototype.navigateByInstruction = function (instruction, _skipLocationChange) {
	        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
	        // Delegate navigation to the root router
	        return this.parent.navigateByInstruction(instruction, _skipLocationChange);
	    };
	    return ChildRouter;
	})(Router);
	/*
	 * Given: ['/a/b', {c: 2}]
	 * Returns: ['', 'a', 'b', {c: 2}]
	 */
	function splitAndFlattenLinkParams(linkParams) {
	    return linkParams.reduce(function (accumulation, item) {
	        if (lang_1.isString(item)) {
	            var strItem = item;
	            return accumulation.concat(strItem.split('/'));
	        }
	        accumulation.push(item);
	        return accumulation;
	    }, []);
	}
	function canActivateOne(nextInstruction, prevInstruction) {
	    var next = _resolveToTrue;
	    if (lang_1.isPresent(nextInstruction.child)) {
	        next = canActivateOne(nextInstruction.child, lang_1.isPresent(prevInstruction) ? prevInstruction.child : null);
	    }
	    return next.then(function (result) {
	        if (result == false) {
	            return false;
	        }
	        if (nextInstruction.component.reuse) {
	            return true;
	        }
	        var hook = route_lifecycle_reflector_1.getCanActivateHook(nextInstruction.component.componentType);
	        if (lang_1.isPresent(hook)) {
	            return hook(nextInstruction.component, lang_1.isPresent(prevInstruction) ? prevInstruction.component : null);
	        }
	        return true;
	    });
	}
	//# sourceMappingURL=router.js.map

/***/ },

/***/ 372:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var collection_1 = __webpack_require__(175);
	var exceptions_1 = __webpack_require__(177);
	var lang_1 = __webpack_require__(21);
	/**
	 * `RouteParams` is an immutable map of parameters for the given route
	 * based on the url matcher and optional parameters for that route.
	 *
	 * You can inject `RouteParams` into the constructor of a component to use it.
	 *
	 * ### Example
	 *
	 * ```
	 * import {bootstrap, Component} from 'angular2/angular2';
	 * import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {path: '/user/:id', component: UserCmp, as: 'UserCmp'},
	 * ])
	 * class AppCmp {}
	 *
	 * @Component({ template: 'user: {{id}}' })
	 * class UserCmp {
	 *   id: string;
	 *   constructor(params: RouteParams) {
	 *     this.id = params.get('id');
	 *   }
	 * }
	 *
	 * bootstrap(AppCmp, ROUTER_PROVIDERS);
	 * ```
	 */
	var RouteParams = (function () {
	    function RouteParams(params) {
	        this.params = params;
	    }
	    RouteParams.prototype.get = function (param) { return lang_1.normalizeBlank(collection_1.StringMapWrapper.get(this.params, param)); };
	    return RouteParams;
	})();
	exports.RouteParams = RouteParams;
	/**
	 * `RouteData` is an immutable map of additional data you can configure in your {@link Route}.
	 *
	 * You can inject `RouteData` into the constructor of a component to use it.
	 *
	 * ## Example
	 *
	 * ```
	 * import {bootstrap, Component, View} from 'angular2/angular2';
	 * import {Router, ROUTER_DIRECTIVES, routerBindings, RouteConfig} from 'angular2/router';
	 *
	 * @Component({...})
	 * @View({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {path: '/user/:id', component: UserCmp, as: 'UserCmp', data: {isAdmin: true}},
	 * ])
	 * class AppCmp {}
	 *
	 * @Component({...})
	 * @View({ template: 'user: {{isAdmin}}' })
	 * class UserCmp {
	 *   string: isAdmin;
	 *   constructor(data: RouteData) {
	 *     this.isAdmin = data.get('isAdmin');
	 *   }
	 * }
	 *
	 * bootstrap(AppCmp, routerBindings(AppCmp));
	 * ```
	 */
	var RouteData = (function () {
	    function RouteData(data) {
	        if (data === void 0) { data = lang_1.CONST_EXPR({}); }
	        this.data = data;
	    }
	    RouteData.prototype.get = function (key) { return lang_1.normalizeBlank(collection_1.StringMapWrapper.get(this.data, key)); };
	    return RouteData;
	})();
	exports.RouteData = RouteData;
	var BLANK_ROUTE_DATA = new RouteData();
	/**
	 * `Instruction` is a tree of {@link ComponentInstruction}s with all the information needed
	 * to transition each component in the app to a given route, including all auxiliary routes.
	 *
	 * `Instruction`s can be created using {@link Router#generate}, and can be used to
	 * perform route changes with {@link Router#navigateByInstruction}.
	 *
	 * ### Example
	 *
	 * ```
	 * import {bootstrap, Component} from 'angular2/angular2';
	 * import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   constructor(router: Router) {
	 *     var instruction = router.generate(['/MyRoute']);
	 *     router.navigateByInstruction(instruction);
	 *   }
	 * }
	 *
	 * bootstrap(AppCmp, ROUTER_PROVIDERS);
	 * ```
	 */
	var Instruction = (function () {
	    function Instruction(component, child, auxInstruction) {
	        this.component = component;
	        this.child = child;
	        this.auxInstruction = auxInstruction;
	    }
	    /**
	     * Returns a new instruction that shares the state of the existing instruction, but with
	     * the given child {@link Instruction} replacing the existing child.
	     */
	    Instruction.prototype.replaceChild = function (child) {
	        return new Instruction(this.component, child, this.auxInstruction);
	    };
	    return Instruction;
	})();
	exports.Instruction = Instruction;
	/**
	 * Represents a partially completed instruction during recognition that only has the
	 * primary (non-aux) route instructions matched.
	 *
	 * `PrimaryInstruction` is an internal class used by `RouteRecognizer` while it's
	 * figuring out where to navigate.
	 */
	var PrimaryInstruction = (function () {
	    function PrimaryInstruction(component, child, auxUrls) {
	        this.component = component;
	        this.child = child;
	        this.auxUrls = auxUrls;
	    }
	    return PrimaryInstruction;
	})();
	exports.PrimaryInstruction = PrimaryInstruction;
	function stringifyInstruction(instruction) {
	    return stringifyInstructionPath(instruction) + stringifyInstructionQuery(instruction);
	}
	exports.stringifyInstruction = stringifyInstruction;
	function stringifyInstructionPath(instruction) {
	    return instruction.component.urlPath + stringifyAux(instruction) +
	        stringifyPrimaryPrefixed(instruction.child);
	}
	exports.stringifyInstructionPath = stringifyInstructionPath;
	function stringifyInstructionQuery(instruction) {
	    return instruction.component.urlParams.length > 0 ?
	        ('?' + instruction.component.urlParams.join('&')) :
	        '';
	}
	exports.stringifyInstructionQuery = stringifyInstructionQuery;
	function stringifyPrimaryPrefixed(instruction) {
	    var primary = stringifyPrimary(instruction);
	    if (primary.length > 0) {
	        primary = '/' + primary;
	    }
	    return primary;
	}
	function stringifyPrimary(instruction) {
	    if (lang_1.isBlank(instruction)) {
	        return '';
	    }
	    var params = instruction.component.urlParams.length > 0 ?
	        (';' + instruction.component.urlParams.join(';')) :
	        '';
	    return instruction.component.urlPath + params + stringifyAux(instruction) +
	        stringifyPrimaryPrefixed(instruction.child);
	}
	function stringifyAux(instruction) {
	    var routes = [];
	    collection_1.StringMapWrapper.forEach(instruction.auxInstruction, function (auxInstruction, _) {
	        routes.push(stringifyPrimary(auxInstruction));
	    });
	    if (routes.length > 0) {
	        return '(' + routes.join('//') + ')';
	    }
	    return '';
	}
	/**
	 * A `ComponentInstruction` represents the route state for a single component. An `Instruction` is
	 * composed of a tree of these `ComponentInstruction`s.
	 *
	 * `ComponentInstructions` is a public API. Instances of `ComponentInstruction` are passed
	 * to route lifecycle hooks, like {@link CanActivate}.
	 *
	 * `ComponentInstruction`s are [https://en.wikipedia.org/wiki/Hash_consing](hash consed). You should
	 * never construct one yourself with "new." Instead, rely on {@link Router/PathRecognizer} to
	 * construct `ComponentInstruction`s.
	 *
	 * You should not modify this object. It should be treated as immutable.
	 */
	var ComponentInstruction = (function () {
	    function ComponentInstruction() {
	        this.reuse = false;
	    }
	    Object.defineProperty(ComponentInstruction.prototype, "componentType", {
	        /**
	         * Returns the component type of the represented route, or `null` if this instruction
	         * hasn't been resolved.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ComponentInstruction.prototype, "specificity", {
	        /**
	         * Returns the specificity of the route associated with this `Instruction`.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ComponentInstruction.prototype, "terminal", {
	        /**
	         * Returns `true` if the component type of this instruction has no child {@link RouteConfig},
	         * or `false` if it does.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(ComponentInstruction.prototype, "routeData", {
	        /**
	         * Returns the route data of the given route that was specified in the {@link RouteDefinition},
	         * or an empty object if no route data was specified.
	         */
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    return ComponentInstruction;
	})();
	exports.ComponentInstruction = ComponentInstruction;
	var ComponentInstruction_ = (function (_super) {
	    __extends(ComponentInstruction_, _super);
	    function ComponentInstruction_(urlPath, urlParams, _recognizer, params) {
	        if (params === void 0) { params = null; }
	        _super.call(this);
	        this._recognizer = _recognizer;
	        this.urlPath = urlPath;
	        this.urlParams = urlParams;
	        this.params = params;
	        if (lang_1.isPresent(this._recognizer.handler.data)) {
	            this._routeData = new RouteData(this._recognizer.handler.data);
	        }
	        else {
	            this._routeData = BLANK_ROUTE_DATA;
	        }
	    }
	    Object.defineProperty(ComponentInstruction_.prototype, "componentType", {
	        get: function () { return this._recognizer.handler.componentType; },
	        enumerable: true,
	        configurable: true
	    });
	    ComponentInstruction_.prototype.resolveComponentType = function () { return this._recognizer.handler.resolveComponentType(); };
	    Object.defineProperty(ComponentInstruction_.prototype, "specificity", {
	        get: function () { return this._recognizer.specificity; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ComponentInstruction_.prototype, "terminal", {
	        get: function () { return this._recognizer.terminal; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ComponentInstruction_.prototype, "routeData", {
	        get: function () { return this._routeData; },
	        enumerable: true,
	        configurable: true
	    });
	    return ComponentInstruction_;
	})(ComponentInstruction);
	exports.ComponentInstruction_ = ComponentInstruction_;
	//# sourceMappingURL=instruction.js.map

/***/ },

/***/ 373:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(21);
	var lifecycle_annotations_impl_1 = __webpack_require__(374);
	var reflection_1 = __webpack_require__(179);
	function hasLifecycleHook(e, type) {
	    if (!(type instanceof lang_1.Type))
	        return false;
	    return e.name in type.prototype;
	}
	exports.hasLifecycleHook = hasLifecycleHook;
	function getCanActivateHook(type) {
	    var annotations = reflection_1.reflector.annotations(type);
	    for (var i = 0; i < annotations.length; i += 1) {
	        var annotation = annotations[i];
	        if (annotation instanceof lifecycle_annotations_impl_1.CanActivate) {
	            return annotation.fn;
	        }
	    }
	    return null;
	}
	exports.getCanActivateHook = getCanActivateHook;
	//# sourceMappingURL=route_lifecycle_reflector.js.map

/***/ },

/***/ 374:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(21);
	var RouteLifecycleHook = (function () {
	    function RouteLifecycleHook(name) {
	        this.name = name;
	    }
	    RouteLifecycleHook = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [String])
	    ], RouteLifecycleHook);
	    return RouteLifecycleHook;
	})();
	exports.RouteLifecycleHook = RouteLifecycleHook;
	var CanActivate = (function () {
	    function CanActivate(fn) {
	        this.fn = fn;
	    }
	    CanActivate = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Function])
	    ], CanActivate);
	    return CanActivate;
	})();
	exports.CanActivate = CanActivate;
	exports.canReuse = lang_1.CONST_EXPR(new RouteLifecycleHook("canReuse"));
	exports.canDeactivate = lang_1.CONST_EXPR(new RouteLifecycleHook("canDeactivate"));
	exports.onActivate = lang_1.CONST_EXPR(new RouteLifecycleHook("onActivate"));
	exports.onReuse = lang_1.CONST_EXPR(new RouteLifecycleHook("onReuse"));
	exports.onDeactivate = lang_1.CONST_EXPR(new RouteLifecycleHook("onDeactivate"));
	//# sourceMappingURL=lifecycle_annotations_impl.js.map

/***/ },

/***/ 375:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var async_1 = __webpack_require__(22);
	var collection_1 = __webpack_require__(175);
	var lang_1 = __webpack_require__(21);
	var exceptions_1 = __webpack_require__(177);
	var angular2_1 = __webpack_require__(17);
	var routerMod = __webpack_require__(371);
	var instruction_1 = __webpack_require__(372);
	var hookMod = __webpack_require__(376);
	var route_lifecycle_reflector_1 = __webpack_require__(373);
	var _resolveToTrue = async_1.PromiseWrapper.resolve(true);
	/**
	 * A router outlet is a placeholder that Angular dynamically fills based on the application's route.
	 *
	 * ## Use
	 *
	 * ```
	 * <router-outlet></router-outlet>
	 * ```
	 */
	var RouterOutlet = (function () {
	    function RouterOutlet(_elementRef, _loader, _parentRouter, nameAttr) {
	        this._elementRef = _elementRef;
	        this._loader = _loader;
	        this._parentRouter = _parentRouter;
	        this.name = null;
	        this._componentRef = null;
	        this._currentInstruction = null;
	        if (lang_1.isPresent(nameAttr)) {
	            this.name = nameAttr;
	            this._parentRouter.registerAuxOutlet(this);
	        }
	        else {
	            this._parentRouter.registerPrimaryOutlet(this);
	        }
	    }
	    /**
	     * Called by the Router to instantiate a new component during the commit phase of a navigation.
	     * This method in turn is responsible for calling the `onActivate` hook of its child.
	     */
	    RouterOutlet.prototype.activate = function (nextInstruction) {
	        var _this = this;
	        var previousInstruction = this._currentInstruction;
	        this._currentInstruction = nextInstruction;
	        var componentType = nextInstruction.componentType;
	        var childRouter = this._parentRouter.childRouter(componentType);
	        var providers = angular2_1.Injector.resolve([
	            angular2_1.provide(instruction_1.RouteData, { useValue: nextInstruction.routeData }),
	            angular2_1.provide(instruction_1.RouteParams, { useValue: new instruction_1.RouteParams(nextInstruction.params) }),
	            angular2_1.provide(routerMod.Router, { useValue: childRouter })
	        ]);
	        return this._loader.loadNextToLocation(componentType, this._elementRef, providers)
	            .then(function (componentRef) {
	            _this._componentRef = componentRef;
	            if (route_lifecycle_reflector_1.hasLifecycleHook(hookMod.onActivate, componentType)) {
	                return _this._componentRef.instance.onActivate(nextInstruction, previousInstruction);
	            }
	        });
	    };
	    /**
	     * Called by the {@link Router} during the commit phase of a navigation when an outlet
	     * reuses a component between different routes.
	     * This method in turn is responsible for calling the `onReuse` hook of its child.
	     */
	    RouterOutlet.prototype.reuse = function (nextInstruction) {
	        var previousInstruction = this._currentInstruction;
	        this._currentInstruction = nextInstruction;
	        if (lang_1.isBlank(this._componentRef)) {
	            throw new exceptions_1.BaseException("Cannot reuse an outlet that does not contain a component.");
	        }
	        return async_1.PromiseWrapper.resolve(route_lifecycle_reflector_1.hasLifecycleHook(hookMod.onReuse, this._currentInstruction.componentType) ?
	            this._componentRef.instance.onReuse(nextInstruction, previousInstruction) :
	            true);
	    };
	    /**
	     * Called by the {@link Router} when an outlet disposes of a component's contents.
	     * This method in turn is responsible for calling the `onDeactivate` hook of its child.
	     */
	    RouterOutlet.prototype.deactivate = function (nextInstruction) {
	        var _this = this;
	        var next = _resolveToTrue;
	        if (lang_1.isPresent(this._componentRef) && lang_1.isPresent(this._currentInstruction) &&
	            route_lifecycle_reflector_1.hasLifecycleHook(hookMod.onDeactivate, this._currentInstruction.componentType)) {
	            next = async_1.PromiseWrapper.resolve(this._componentRef.instance.onDeactivate(nextInstruction, this._currentInstruction));
	        }
	        return next.then(function (_) {
	            if (lang_1.isPresent(_this._componentRef)) {
	                _this._componentRef.dispose();
	                _this._componentRef = null;
	            }
	        });
	    };
	    /**
	     * Called by the {@link Router} during recognition phase of a navigation.
	     *
	     * If this resolves to `false`, the given navigation is cancelled.
	     *
	     * This method delegates to the child component's `canDeactivate` hook if it exists,
	     * and otherwise resolves to true.
	     */
	    RouterOutlet.prototype.canDeactivate = function (nextInstruction) {
	        if (lang_1.isBlank(this._currentInstruction)) {
	            return _resolveToTrue;
	        }
	        if (route_lifecycle_reflector_1.hasLifecycleHook(hookMod.canDeactivate, this._currentInstruction.componentType)) {
	            return async_1.PromiseWrapper.resolve(this._componentRef.instance.canDeactivate(nextInstruction, this._currentInstruction));
	        }
	        return _resolveToTrue;
	    };
	    /**
	     * Called by the {@link Router} during recognition phase of a navigation.
	     *
	     * If the new child component has a different Type than the existing child component,
	     * this will resolve to `false`. You can't reuse an old component when the new component
	     * is of a different Type.
	     *
	     * Otherwise, this method delegates to the child component's `canReuse` hook if it exists,
	     * or resolves to true if the hook is not present.
	     */
	    RouterOutlet.prototype.canReuse = function (nextInstruction) {
	        var result;
	        if (lang_1.isBlank(this._currentInstruction) ||
	            this._currentInstruction.componentType != nextInstruction.componentType) {
	            result = false;
	        }
	        else if (route_lifecycle_reflector_1.hasLifecycleHook(hookMod.canReuse, this._currentInstruction.componentType)) {
	            result = this._componentRef.instance.canReuse(nextInstruction, this._currentInstruction);
	        }
	        else {
	            result = nextInstruction == this._currentInstruction ||
	                (lang_1.isPresent(nextInstruction.params) && lang_1.isPresent(this._currentInstruction.params) &&
	                    collection_1.StringMapWrapper.equals(nextInstruction.params, this._currentInstruction.params));
	        }
	        return async_1.PromiseWrapper.resolve(result);
	    };
	    RouterOutlet = __decorate([
	        angular2_1.Directive({ selector: 'router-outlet' }),
	        __param(3, angular2_1.Attribute('name')), 
	        __metadata('design:paramtypes', [angular2_1.ElementRef, angular2_1.DynamicComponentLoader, routerMod.Router, String])
	    ], RouterOutlet);
	    return RouterOutlet;
	})();
	exports.RouterOutlet = RouterOutlet;
	//# sourceMappingURL=router_outlet.js.map

/***/ },

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

	'use strict';/**
	 * This indirection is needed to free up Component, etc symbols in the public API
	 * to be used by the decorator versions of these annotations.
	 */
	var decorators_1 = __webpack_require__(172);
	var lifecycle_annotations_impl_1 = __webpack_require__(374);
	var lifecycle_annotations_impl_2 = __webpack_require__(374);
	exports.canReuse = lifecycle_annotations_impl_2.canReuse;
	exports.canDeactivate = lifecycle_annotations_impl_2.canDeactivate;
	exports.onActivate = lifecycle_annotations_impl_2.onActivate;
	exports.onReuse = lifecycle_annotations_impl_2.onReuse;
	exports.onDeactivate = lifecycle_annotations_impl_2.onDeactivate;
	/**
	 * Defines route lifecycle hook `CanActivate`, which is called by the router to determine
	 * if a component can be instantiated as part of a navigation.
	 *
	 * <aside class="is-right">
	 * Note that unlike other lifecycle hooks, this one uses an annotation rather than an interface.
	 * This is because the `CanActivate` function is called before the component is instantiated.
	 * </aside>
	 *
	 * The `CanActivate` hook is called with two {@link ComponentInstruction}s as parameters, the first
	 * representing the current route being navigated to, and the second parameter representing the
	 * previous route or `null`.
	 *
	 * ```typescript
	 * @CanActivate((next, prev) => boolean | Promise<boolean>)
	 * ```
	 *
	 * If `CanActivate` returns or resolves to `false`, the navigation is cancelled.
	 * If `CanActivate` throws or rejects, the navigation is also cancelled.
	 * If `CanActivate` returns or resolves to `true`, navigation continues, the component is
	 * instantiated, and the {@link OnActivate} hook of that component is called if implemented.
	 *
	 * ### Example
	 *
	 * {@example router/ts/can_activate/can_activate_example.ts region='canActivate' }
	 */
	exports.CanActivate = decorators_1.makeDecorator(lifecycle_annotations_impl_1.CanActivate);
	//# sourceMappingURL=lifecycle_annotations.js.map

/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(17);
	var lang_1 = __webpack_require__(21);
	var router_1 = __webpack_require__(371);
	var location_1 = __webpack_require__(378);
	var instruction_1 = __webpack_require__(372);
	/**
	 * The RouterLink directive lets you link to specific parts of your app.
	 *
	 * Consider the following route configuration:
	
	 * ```
	 * @RouteConfig([
	 *   { path: '/user', component: UserCmp, as: 'User' }
	 * ]);
	 * class MyComp {}
	 * ```
	 *
	 * When linking to this `User` route, you can write:
	 *
	 * ```
	 * <a [router-link]="['./User']">link to user component</a>
	 * ```
	 *
	 * RouterLink expects the value to be an array of route names, followed by the params
	 * for that level of routing. For instance `['/Team', {teamId: 1}, 'User', {userId: 2}]`
	 * means that we want to generate a link for the `Team` route with params `{teamId: 1}`,
	 * and with a child route `User` with params `{userId: 2}`.
	 *
	 * The first route name should be prepended with `/`, `./`, or `../`.
	 * If the route begins with `/`, the router will look up the route from the root of the app.
	 * If the route begins with `./`, the router will instead look in the current component's
	 * children for the route. And if the route begins with `../`, the router will look at the
	 * current component's parent.
	 */
	var RouterLink = (function () {
	    function RouterLink(_router, _location) {
	        this._router = _router;
	        this._location = _location;
	    }
	    Object.defineProperty(RouterLink.prototype, "isRouteActive", {
	        get: function () { return this._router.isRouteActive(this._navigationInstruction); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RouterLink.prototype, "routeParams", {
	        set: function (changes) {
	            this._routeParams = changes;
	            this._navigationInstruction = this._router.generate(this._routeParams);
	            var navigationHref = instruction_1.stringifyInstruction(this._navigationInstruction);
	            this.visibleHref = this._location.prepareExternalUrl(navigationHref);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    RouterLink.prototype.onClick = function () {
	        // If no target, or if target is _self, prevent default browser behavior
	        if (!lang_1.isString(this.target) || this.target == '_self') {
	            this._router.navigateByInstruction(this._navigationInstruction);
	            return false;
	        }
	        return true;
	    };
	    RouterLink = __decorate([
	        angular2_1.Directive({
	            selector: '[router-link]',
	            inputs: ['routeParams: routerLink', 'target: target'],
	            host: {
	                '(click)': 'onClick()',
	                '[attr.href]': 'visibleHref',
	                '[class.router-link-active]': 'isRouteActive'
	            }
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, location_1.Location])
	    ], RouterLink);
	    return RouterLink;
	})();
	exports.RouterLink = RouterLink;
	//# sourceMappingURL=router_link.js.map

/***/ },

/***/ 378:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var location_strategy_1 = __webpack_require__(379);
	var lang_1 = __webpack_require__(21);
	var async_1 = __webpack_require__(22);
	var lang_2 = __webpack_require__(21);
	var exceptions_1 = __webpack_require__(177);
	var angular2_1 = __webpack_require__(17);
	/**
	 * The `APP_BASE_HREF` token represents the base href to be used with the
	 * {@link PathLocationStrategy}.
	 *
	 * If you're using {@link PathLocationStrategy}, you must provide a provider to a string
	 * representing the URL prefix that should be preserved when generating and recognizing
	 * URLs.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component} from 'angular2/angular2';
	 * import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   // ...
	 * }
	 *
	 * bootstrap(AppCmp, [
	 *   ROUTER_PROVIDERS,
	 *   PathLocationStrategy,
	 *   provide(APP_BASE_HREF, {useValue: '/my/app'})
	 * ]);
	 * ```
	 */
	exports.APP_BASE_HREF = lang_1.CONST_EXPR(new angular2_1.OpaqueToken('appBaseHref'));
	/**
	 * `Location` is a service that applications can use to interact with a browser's URL.
	 * Depending on which {@link LocationStrategy} is used, `Location` will either persist
	 * to the URL's path or the URL's hash segment.
	 *
	 * Note: it's better to use {@link Router#navigate} service to trigger route changes. Use
	 * `Location` only if you need to interact with or create normalized URLs outside of
	 * routing.
	 *
	 * `Location` is responsible for normalizing the URL against the application's base href.
	 * A normalized URL is absolute from the URL host, includes the application's base href, and has no
	 * trailing slash:
	 * - `/my/app/user/123` is normalized
	 * - `my/app/user/123` **is not** normalized
	 * - `/my/app/user/123/` **is not** normalized
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component} from 'angular2/angular2';
	 * import {
	 *   ROUTER_DIRECTIVES,
	 *   ROUTER_PROVIDERS,
	 *   RouteConfig,
	 *   Location
	 * } from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   constructor(location: Location) {
	 *     location.go('/foo');
	 *   }
	 * }
	 *
	 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
	 * ```
	 */
	var Location = (function () {
	    function Location(platformStrategy, href) {
	        var _this = this;
	        this.platformStrategy = platformStrategy;
	        /** @internal */
	        this._subject = new async_1.EventEmitter();
	        var browserBaseHref = lang_1.isPresent(href) ? href : this.platformStrategy.getBaseHref();
	        if (lang_2.isBlank(browserBaseHref)) {
	            throw new exceptions_1.BaseException("No base href set. Either provide a provider for the APP_BASE_HREF token or add a base element to the document.");
	        }
	        this._baseHref = stripTrailingSlash(stripIndexHtml(browserBaseHref));
	        this.platformStrategy.onPopState(function (_) { async_1.ObservableWrapper.callNext(_this._subject, { 'url': _this.path(), 'pop': true }); });
	    }
	    /**
	     * Returns the normalized URL path.
	     */
	    Location.prototype.path = function () { return this.normalize(this.platformStrategy.path()); };
	    /**
	     * Given a string representing a URL, returns the normalized URL path without leading or
	     * trailing slashes
	     */
	    Location.prototype.normalize = function (url) {
	        return stripTrailingSlash(_stripBaseHref(this._baseHref, stripIndexHtml(url)));
	    };
	    /**
	     * Given a string representing a URL, returns the platform-specific external URL path.
	     * If the given URL doesn't begin with a leading slash (`'/'`), this method adds one
	     * before normalizing. This method will also add a hash if `HashLocationStrategy` is
	     * used, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
	     */
	    Location.prototype.prepareExternalUrl = function (url) {
	        if (!url.startsWith('/')) {
	            url = '/' + url;
	        }
	        return this.platformStrategy.prepareExternalUrl(stripTrailingSlash(_addBaseHref(this._baseHref, url)));
	    };
	    /**
	     * Changes the browsers URL to the normalized version of the given URL, and pushes a
	     * new item onto the platform's history.
	     */
	    Location.prototype.go = function (path, query) {
	        if (query === void 0) { query = ''; }
	        this.platformStrategy.pushState(null, '', path, query);
	    };
	    /**
	     * Navigates forward in the platform's history.
	     */
	    Location.prototype.forward = function () { this.platformStrategy.forward(); };
	    /**
	     * Navigates back in the platform's history.
	     */
	    Location.prototype.back = function () { this.platformStrategy.back(); };
	    /**
	     * Subscribe to the platform's `popState` events.
	     */
	    Location.prototype.subscribe = function (onNext, onThrow, onReturn) {
	        if (onThrow === void 0) { onThrow = null; }
	        if (onReturn === void 0) { onReturn = null; }
	        return async_1.ObservableWrapper.subscribe(this._subject, onNext, onThrow, onReturn);
	    };
	    Location = __decorate([
	        angular2_1.Injectable(),
	        __param(1, angular2_1.Optional()),
	        __param(1, angular2_1.Inject(exports.APP_BASE_HREF)), 
	        __metadata('design:paramtypes', [location_strategy_1.LocationStrategy, String])
	    ], Location);
	    return Location;
	})();
	exports.Location = Location;
	function _stripBaseHref(baseHref, url) {
	    if (baseHref.length > 0 && url.startsWith(baseHref)) {
	        return url.substring(baseHref.length);
	    }
	    return url;
	}
	function _addBaseHref(baseHref, url) {
	    if (!url.startsWith(baseHref)) {
	        return baseHref + url;
	    }
	    return url;
	}
	function stripIndexHtml(url) {
	    if (/\/index.html$/g.test(url)) {
	        // '/index.html'.length == 11
	        return url.substring(0, url.length - 11);
	    }
	    return url;
	}
	function stripTrailingSlash(url) {
	    if (/\/$/g.test(url)) {
	        url = url.substring(0, url.length - 1);
	    }
	    return url;
	}
	//# sourceMappingURL=location.js.map

/***/ },

/***/ 379:
/***/ function(module, exports) {

	'use strict';/**
	 * `LocationStrategy` is responsible for representing and reading route state
	 * from the the browser's URL. Angular provides two strategies:
	 * {@link HashLocationStrategy} (default) and {@link PathLocationStrategy}.
	 *
	 * This is used under the hood of the {@link Location} service.
	 *
	 * Applications should use the {@link Router} or {@link Location} services to
	 * interact with application route state.
	 *
	 * For instance, {@link HashLocationStrategy} produces URLs like
	 * `http://example.com#/foo`, and {@link PathLocationStrategy} produces
	 * `http://example.com/foo` as an equivalent URL.
	 *
	 * See these two classes for more.
	 */
	var LocationStrategy = (function () {
	    function LocationStrategy() {
	    }
	    return LocationStrategy;
	})();
	exports.LocationStrategy = LocationStrategy;
	function normalizeQueryParams(params) {
	    return (params.length > 0 && params.substring(0, 1) != '?') ? ('?' + params) : params;
	}
	exports.normalizeQueryParams = normalizeQueryParams;
	//# sourceMappingURL=location_strategy.js.map

/***/ },

/***/ 380:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var route_recognizer_1 = __webpack_require__(381);
	var instruction_1 = __webpack_require__(372);
	var collection_1 = __webpack_require__(175);
	var async_1 = __webpack_require__(22);
	var lang_1 = __webpack_require__(21);
	var exceptions_1 = __webpack_require__(177);
	var route_config_impl_1 = __webpack_require__(384);
	var reflection_1 = __webpack_require__(179);
	var angular2_1 = __webpack_require__(17);
	var route_config_nomalizer_1 = __webpack_require__(387);
	var url_parser_1 = __webpack_require__(383);
	var _resolveToNull = async_1.PromiseWrapper.resolve(null);
	/**
	 * The RouteRegistry holds route configurations for each component in an Angular app.
	 * It is responsible for creating Instructions from URLs, and generating URLs based on route and
	 * parameters.
	 */
	var RouteRegistry = (function () {
	    function RouteRegistry() {
	        this._rules = new collection_1.Map();
	    }
	    /**
	     * Given a component and a configuration object, add the route to this registry
	     */
	    RouteRegistry.prototype.config = function (parentComponent, config) {
	        config = route_config_nomalizer_1.normalizeRouteConfig(config);
	        // this is here because Dart type guard reasons
	        if (config instanceof route_config_impl_1.Route) {
	            route_config_nomalizer_1.assertComponentExists(config.component, config.path);
	        }
	        else if (config instanceof route_config_impl_1.AuxRoute) {
	            route_config_nomalizer_1.assertComponentExists(config.component, config.path);
	        }
	        var recognizer = this._rules.get(parentComponent);
	        if (lang_1.isBlank(recognizer)) {
	            recognizer = new route_recognizer_1.RouteRecognizer();
	            this._rules.set(parentComponent, recognizer);
	        }
	        var terminal = recognizer.config(config);
	        if (config instanceof route_config_impl_1.Route) {
	            if (terminal) {
	                assertTerminalComponent(config.component, config.path);
	            }
	            else {
	                this.configFromComponent(config.component);
	            }
	        }
	    };
	    /**
	     * Reads the annotations of a component and configures the registry based on them
	     */
	    RouteRegistry.prototype.configFromComponent = function (component) {
	        var _this = this;
	        if (!lang_1.isType(component)) {
	            return;
	        }
	        // Don't read the annotations from a type more than once –
	        // this prevents an infinite loop if a component routes recursively.
	        if (this._rules.has(component)) {
	            return;
	        }
	        var annotations = reflection_1.reflector.annotations(component);
	        if (lang_1.isPresent(annotations)) {
	            for (var i = 0; i < annotations.length; i++) {
	                var annotation = annotations[i];
	                if (annotation instanceof route_config_impl_1.RouteConfig) {
	                    var routeCfgs = annotation.configs;
	                    routeCfgs.forEach(function (config) { return _this.config(component, config); });
	                }
	            }
	        }
	    };
	    /**
	     * Given a URL and a parent component, return the most specific instruction for navigating
	     * the application into the state specified by the url
	     */
	    RouteRegistry.prototype.recognize = function (url, parentComponent) {
	        var parsedUrl = url_parser_1.parser.parse(url);
	        return this._recognize(parsedUrl, parentComponent);
	    };
	    RouteRegistry.prototype._recognize = function (parsedUrl, parentComponent) {
	        var _this = this;
	        return this._recognizePrimaryRoute(parsedUrl, parentComponent)
	            .then(function (instruction) {
	            return _this._completeAuxiliaryRouteMatches(instruction, parentComponent);
	        });
	    };
	    RouteRegistry.prototype._recognizePrimaryRoute = function (parsedUrl, parentComponent) {
	        var _this = this;
	        var componentRecognizer = this._rules.get(parentComponent);
	        if (lang_1.isBlank(componentRecognizer)) {
	            return _resolveToNull;
	        }
	        // Matches some beginning part of the given URL
	        var possibleMatches = componentRecognizer.recognize(parsedUrl);
	        var matchPromises = possibleMatches.map(function (candidate) { return _this._completePrimaryRouteMatch(candidate); });
	        return async_1.PromiseWrapper.all(matchPromises).then(mostSpecific);
	    };
	    RouteRegistry.prototype._completePrimaryRouteMatch = function (partialMatch) {
	        var _this = this;
	        var instruction = partialMatch.instruction;
	        return instruction.resolveComponentType().then(function (componentType) {
	            _this.configFromComponent(componentType);
	            if (instruction.terminal) {
	                return new instruction_1.PrimaryInstruction(instruction, null, partialMatch.remainingAux);
	            }
	            return _this._recognizePrimaryRoute(partialMatch.remaining, componentType)
	                .then(function (childInstruction) {
	                if (lang_1.isBlank(childInstruction)) {
	                    return null;
	                }
	                else {
	                    return new instruction_1.PrimaryInstruction(instruction, childInstruction, partialMatch.remainingAux);
	                }
	            });
	        });
	    };
	    RouteRegistry.prototype._completeAuxiliaryRouteMatches = function (instruction, parentComponent) {
	        var _this = this;
	        if (lang_1.isBlank(instruction)) {
	            return _resolveToNull;
	        }
	        var componentRecognizer = this._rules.get(parentComponent);
	        var auxInstructions = {};
	        var promises = instruction.auxUrls.map(function (auxSegment) {
	            var match = componentRecognizer.recognizeAuxiliary(auxSegment);
	            if (lang_1.isBlank(match)) {
	                return _resolveToNull;
	            }
	            return _this._completePrimaryRouteMatch(match).then(function (auxInstruction) {
	                if (lang_1.isPresent(auxInstruction)) {
	                    return _this._completeAuxiliaryRouteMatches(auxInstruction, parentComponent)
	                        .then(function (finishedAuxRoute) {
	                        auxInstructions[auxSegment.path] = finishedAuxRoute;
	                    });
	                }
	            });
	        });
	        return async_1.PromiseWrapper.all(promises).then(function (_) {
	            if (lang_1.isBlank(instruction.child)) {
	                return new instruction_1.Instruction(instruction.component, null, auxInstructions);
	            }
	            return _this._completeAuxiliaryRouteMatches(instruction.child, instruction.component.componentType)
	                .then(function (completeChild) {
	                return new instruction_1.Instruction(instruction.component, completeChild, auxInstructions);
	            });
	        });
	    };
	    /**
	     * Given a normalized list with component names and params like: `['user', {id: 3 }]`
	     * generates a url with a leading slash relative to the provided `parentComponent`.
	     */
	    RouteRegistry.prototype.generate = function (linkParams, parentComponent) {
	        var segments = [];
	        var componentCursor = parentComponent;
	        var lastInstructionIsTerminal = false;
	        for (var i = 0; i < linkParams.length; i += 1) {
	            var segment = linkParams[i];
	            if (lang_1.isBlank(componentCursor)) {
	                throw new exceptions_1.BaseException("Could not find route named \"" + segment + "\".");
	            }
	            if (!lang_1.isString(segment)) {
	                throw new exceptions_1.BaseException("Unexpected segment \"" + segment + "\" in link DSL. Expected a string.");
	            }
	            else if (segment == '' || segment == '.' || segment == '..') {
	                throw new exceptions_1.BaseException("\"" + segment + "/\" is only allowed at the beginning of a link DSL.");
	            }
	            var params = {};
	            if (i + 1 < linkParams.length) {
	                var nextSegment = linkParams[i + 1];
	                if (lang_1.isStringMap(nextSegment)) {
	                    params = nextSegment;
	                    i += 1;
	                }
	            }
	            var componentRecognizer = this._rules.get(componentCursor);
	            if (lang_1.isBlank(componentRecognizer)) {
	                throw new exceptions_1.BaseException("Component \"" + lang_1.getTypeNameForDebugging(componentCursor) + "\" has no route config.");
	            }
	            var response = componentRecognizer.generate(segment, params);
	            if (lang_1.isBlank(response)) {
	                throw new exceptions_1.BaseException("Component \"" + lang_1.getTypeNameForDebugging(componentCursor) + "\" has no route named \"" + segment + "\".");
	            }
	            segments.push(response);
	            componentCursor = response.componentType;
	            lastInstructionIsTerminal = response.terminal;
	        }
	        var instruction = null;
	        if (!lastInstructionIsTerminal) {
	            instruction = this._generateRedirects(componentCursor);
	            if (lang_1.isPresent(instruction)) {
	                var lastInstruction = instruction;
	                while (lang_1.isPresent(lastInstruction.child)) {
	                    lastInstruction = lastInstruction.child;
	                }
	                lastInstructionIsTerminal = lastInstruction.component.terminal;
	            }
	            if (lang_1.isPresent(componentCursor) && !lastInstructionIsTerminal) {
	                throw new exceptions_1.BaseException("Link \"" + collection_1.ListWrapper.toJSON(linkParams) + "\" does not resolve to a terminal or async instruction.");
	            }
	        }
	        while (segments.length > 0) {
	            instruction = new instruction_1.Instruction(segments.pop(), instruction, {});
	        }
	        return instruction;
	    };
	    RouteRegistry.prototype.hasRoute = function (name, parentComponent) {
	        var componentRecognizer = this._rules.get(parentComponent);
	        if (lang_1.isBlank(componentRecognizer)) {
	            return false;
	        }
	        return componentRecognizer.hasRoute(name);
	    };
	    // if the child includes a redirect like : "/" -> "/something",
	    // we want to honor that redirection when creating the link
	    RouteRegistry.prototype._generateRedirects = function (componentCursor) {
	        if (lang_1.isBlank(componentCursor)) {
	            return null;
	        }
	        var componentRecognizer = this._rules.get(componentCursor);
	        if (lang_1.isBlank(componentRecognizer)) {
	            return null;
	        }
	        for (var i = 0; i < componentRecognizer.redirects.length; i += 1) {
	            var redirect = componentRecognizer.redirects[i];
	            // we only handle redirecting from an empty segment
	            if (redirect.segments.length == 1 && redirect.segments[0] == '') {
	                var toSegments = url_parser_1.pathSegmentsToUrl(redirect.toSegments);
	                var matches = componentRecognizer.recognize(toSegments);
	                var primaryInstruction = collection_1.ListWrapper.maximum(matches, function (match) { return match.instruction.specificity; });
	                if (lang_1.isPresent(primaryInstruction)) {
	                    var child = this._generateRedirects(primaryInstruction.instruction.componentType);
	                    return new instruction_1.Instruction(primaryInstruction.instruction, child, {});
	                }
	                return null;
	            }
	        }
	        return null;
	    };
	    RouteRegistry = __decorate([
	        angular2_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], RouteRegistry);
	    return RouteRegistry;
	})();
	exports.RouteRegistry = RouteRegistry;
	/*
	 * Given a list of instructions, returns the most specific instruction
	 */
	function mostSpecific(instructions) {
	    return collection_1.ListWrapper.maximum(instructions, function (instruction) { return instruction.component.specificity; });
	}
	function assertTerminalComponent(component, path) {
	    if (!lang_1.isType(component)) {
	        return;
	    }
	    var annotations = reflection_1.reflector.annotations(component);
	    if (lang_1.isPresent(annotations)) {
	        for (var i = 0; i < annotations.length; i++) {
	            var annotation = annotations[i];
	            if (annotation instanceof route_config_impl_1.RouteConfig) {
	                throw new exceptions_1.BaseException("Child routes are not allowed for \"" + path + "\". Use \"...\" on the parent's route path.");
	            }
	        }
	    }
	}
	//# sourceMappingURL=route_registry.js.map

/***/ },

/***/ 381:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(21);
	var exceptions_1 = __webpack_require__(177);
	var collection_1 = __webpack_require__(175);
	var path_recognizer_1 = __webpack_require__(382);
	var route_config_impl_1 = __webpack_require__(384);
	var async_route_handler_1 = __webpack_require__(385);
	var sync_route_handler_1 = __webpack_require__(386);
	var url_parser_1 = __webpack_require__(383);
	/**
	 * `RouteRecognizer` is responsible for recognizing routes for a single component.
	 * It is consumed by `RouteRegistry`, which knows how to recognize an entire hierarchy of
	 * components.
	 */
	var RouteRecognizer = (function () {
	    function RouteRecognizer() {
	        this.names = new collection_1.Map();
	        this.auxRoutes = new collection_1.Map();
	        // TODO: optimize this into a trie
	        this.matchers = [];
	        // TODO: optimize this into a trie
	        this.redirects = [];
	    }
	    RouteRecognizer.prototype.config = function (config) {
	        var handler;
	        if (lang_1.isPresent(config.name) && config.name[0].toUpperCase() != config.name[0]) {
	            var suggestedName = config.name[0].toUpperCase() + config.name.substring(1);
	            throw new exceptions_1.BaseException("Route \"" + config.path + "\" with name \"" + config.name + "\" does not begin with an uppercase letter. Route names should be CamelCase like \"" + suggestedName + "\".");
	        }
	        if (config instanceof route_config_impl_1.AuxRoute) {
	            handler = new sync_route_handler_1.SyncRouteHandler(config.component, config.data);
	            var path = config.path.startsWith('/') ? config.path.substring(1) : config.path;
	            var recognizer = new path_recognizer_1.PathRecognizer(config.path, handler);
	            this.auxRoutes.set(path, recognizer);
	            return recognizer.terminal;
	        }
	        if (config instanceof route_config_impl_1.Redirect) {
	            this.redirects.push(new Redirector(config.path, config.redirectTo));
	            return true;
	        }
	        if (config instanceof route_config_impl_1.Route) {
	            handler = new sync_route_handler_1.SyncRouteHandler(config.component, config.data);
	        }
	        else if (config instanceof route_config_impl_1.AsyncRoute) {
	            handler = new async_route_handler_1.AsyncRouteHandler(config.loader, config.data);
	        }
	        var recognizer = new path_recognizer_1.PathRecognizer(config.path, handler);
	        this.matchers.forEach(function (matcher) {
	            if (recognizer.hash == matcher.hash) {
	                throw new exceptions_1.BaseException("Configuration '" + config.path + "' conflicts with existing route '" + matcher.path + "'");
	            }
	        });
	        this.matchers.push(recognizer);
	        if (lang_1.isPresent(config.name)) {
	            this.names.set(config.name, recognizer);
	        }
	        return recognizer.terminal;
	    };
	    /**
	     * Given a URL, returns a list of `RouteMatch`es, which are partial recognitions for some route.
	     *
	     */
	    RouteRecognizer.prototype.recognize = function (urlParse) {
	        var solutions = [];
	        urlParse = this._redirect(urlParse);
	        this.matchers.forEach(function (pathRecognizer) {
	            var pathMatch = pathRecognizer.recognize(urlParse);
	            if (lang_1.isPresent(pathMatch)) {
	                solutions.push(pathMatch);
	            }
	        });
	        return solutions;
	    };
	    /** @internal */
	    RouteRecognizer.prototype._redirect = function (urlParse) {
	        for (var i = 0; i < this.redirects.length; i += 1) {
	            var redirector = this.redirects[i];
	            var redirectedUrl = redirector.redirect(urlParse);
	            if (lang_1.isPresent(redirectedUrl)) {
	                return redirectedUrl;
	            }
	        }
	        return urlParse;
	    };
	    RouteRecognizer.prototype.recognizeAuxiliary = function (urlParse) {
	        var pathRecognizer = this.auxRoutes.get(urlParse.path);
	        if (lang_1.isBlank(pathRecognizer)) {
	            return null;
	        }
	        return pathRecognizer.recognize(urlParse);
	    };
	    RouteRecognizer.prototype.hasRoute = function (name) { return this.names.has(name); };
	    RouteRecognizer.prototype.generate = function (name, params) {
	        var pathRecognizer = this.names.get(name);
	        if (lang_1.isBlank(pathRecognizer)) {
	            return null;
	        }
	        return pathRecognizer.generate(params);
	    };
	    return RouteRecognizer;
	})();
	exports.RouteRecognizer = RouteRecognizer;
	var Redirector = (function () {
	    function Redirector(path, redirectTo) {
	        this.segments = [];
	        this.toSegments = [];
	        if (path.startsWith('/')) {
	            path = path.substring(1);
	        }
	        this.segments = path.split('/');
	        if (redirectTo.startsWith('/')) {
	            redirectTo = redirectTo.substring(1);
	        }
	        this.toSegments = redirectTo.split('/');
	    }
	    /**
	     * Returns `null` or a `ParsedUrl` representing the new path to match
	     */
	    Redirector.prototype.redirect = function (urlParse) {
	        for (var i = 0; i < this.segments.length; i += 1) {
	            if (lang_1.isBlank(urlParse)) {
	                return null;
	            }
	            var segment = this.segments[i];
	            if (segment != urlParse.path) {
	                return null;
	            }
	            urlParse = urlParse.child;
	        }
	        for (var i = this.toSegments.length - 1; i >= 0; i -= 1) {
	            var segment = this.toSegments[i];
	            urlParse = new url_parser_1.Url(segment, urlParse);
	        }
	        return urlParse;
	    };
	    return Redirector;
	})();
	exports.Redirector = Redirector;
	//# sourceMappingURL=route_recognizer.js.map

/***/ },

/***/ 382:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(21);
	var exceptions_1 = __webpack_require__(177);
	var collection_1 = __webpack_require__(175);
	var url_parser_1 = __webpack_require__(383);
	var instruction_1 = __webpack_require__(372);
	var TouchMap = (function () {
	    function TouchMap(map) {
	        var _this = this;
	        this.map = {};
	        this.keys = {};
	        if (lang_1.isPresent(map)) {
	            collection_1.StringMapWrapper.forEach(map, function (value, key) {
	                _this.map[key] = lang_1.isPresent(value) ? value.toString() : null;
	                _this.keys[key] = true;
	            });
	        }
	    }
	    TouchMap.prototype.get = function (key) {
	        collection_1.StringMapWrapper.delete(this.keys, key);
	        return this.map[key];
	    };
	    TouchMap.prototype.getUnused = function () {
	        var _this = this;
	        var unused = collection_1.StringMapWrapper.create();
	        var keys = collection_1.StringMapWrapper.keys(this.keys);
	        keys.forEach(function (key) { return unused[key] = collection_1.StringMapWrapper.get(_this.map, key); });
	        return unused;
	    };
	    return TouchMap;
	})();
	function normalizeString(obj) {
	    if (lang_1.isBlank(obj)) {
	        return null;
	    }
	    else {
	        return obj.toString();
	    }
	}
	var ContinuationSegment = (function () {
	    function ContinuationSegment() {
	        this.name = '';
	    }
	    ContinuationSegment.prototype.generate = function (params) { return ''; };
	    ContinuationSegment.prototype.match = function (path) { return true; };
	    return ContinuationSegment;
	})();
	var StaticSegment = (function () {
	    function StaticSegment(path) {
	        this.path = path;
	        this.name = '';
	    }
	    StaticSegment.prototype.match = function (path) { return path == this.path; };
	    StaticSegment.prototype.generate = function (params) { return this.path; };
	    return StaticSegment;
	})();
	var DynamicSegment = (function () {
	    function DynamicSegment(name) {
	        this.name = name;
	    }
	    DynamicSegment.prototype.match = function (path) { return path.length > 0; };
	    DynamicSegment.prototype.generate = function (params) {
	        if (!collection_1.StringMapWrapper.contains(params.map, this.name)) {
	            throw new exceptions_1.BaseException("Route generator for '" + this.name + "' was not included in parameters passed.");
	        }
	        return normalizeString(params.get(this.name));
	    };
	    return DynamicSegment;
	})();
	var StarSegment = (function () {
	    function StarSegment(name) {
	        this.name = name;
	    }
	    StarSegment.prototype.match = function (path) { return true; };
	    StarSegment.prototype.generate = function (params) { return normalizeString(params.get(this.name)); };
	    return StarSegment;
	})();
	var paramMatcher = /^:([^\/]+)$/g;
	var wildcardMatcher = /^\*([^\/]+)$/g;
	function parsePathString(route) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.startsWith("/")) {
	        route = route.substring(1);
	    }
	    var segments = splitBySlash(route);
	    var results = [];
	    var specificity = 0;
	    // The "specificity" of a path is used to determine which route is used when multiple routes match
	    // a URL.
	    // Static segments (like "/foo") are the most specific, followed by dynamic segments (like
	    // "/:id"). Star segments
	    // add no specificity. Segments at the start of the path are more specific than proceeding ones.
	    // The code below uses place values to combine the different types of segments into a single
	    // integer that we can
	    // sort later. Each static segment is worth hundreds of points of specificity (10000, 9900, ...,
	    // 200), and each
	    // dynamic segment is worth single points of specificity (100, 99, ... 2).
	    if (segments.length > 98) {
	        throw new exceptions_1.BaseException("'" + route + "' has more than the maximum supported number of segments.");
	    }
	    var limit = segments.length - 1;
	    for (var i = 0; i <= limit; i++) {
	        var segment = segments[i], match;
	        if (lang_1.isPresent(match = lang_1.RegExpWrapper.firstMatch(paramMatcher, segment))) {
	            results.push(new DynamicSegment(match[1]));
	            specificity += (100 - i);
	        }
	        else if (lang_1.isPresent(match = lang_1.RegExpWrapper.firstMatch(wildcardMatcher, segment))) {
	            results.push(new StarSegment(match[1]));
	        }
	        else if (segment == '...') {
	            if (i < limit) {
	                // TODO (matsko): setup a proper error here `
	                throw new exceptions_1.BaseException("Unexpected \"...\" before the end of the path for \"" + route + "\".");
	            }
	            results.push(new ContinuationSegment());
	        }
	        else {
	            results.push(new StaticSegment(segment));
	            specificity += 100 * (100 - i);
	        }
	    }
	    var result = collection_1.StringMapWrapper.create();
	    collection_1.StringMapWrapper.set(result, 'segments', results);
	    collection_1.StringMapWrapper.set(result, 'specificity', specificity);
	    return result;
	}
	// this function is used to determine whether a route config path like `/foo/:id` collides with
	// `/foo/:name`
	function pathDslHash(segments) {
	    return segments.map(function (segment) {
	        if (segment instanceof StarSegment) {
	            return '*';
	        }
	        else if (segment instanceof ContinuationSegment) {
	            return '...';
	        }
	        else if (segment instanceof DynamicSegment) {
	            return ':';
	        }
	        else if (segment instanceof StaticSegment) {
	            return segment.path;
	        }
	    })
	        .join('/');
	}
	function splitBySlash(url) {
	    return url.split('/');
	}
	var RESERVED_CHARS = lang_1.RegExpWrapper.create('//|\\(|\\)|;|\\?|=');
	function assertPath(path) {
	    if (lang_1.StringWrapper.contains(path, '#')) {
	        throw new exceptions_1.BaseException("Path \"" + path + "\" should not include \"#\". Use \"HashLocationStrategy\" instead.");
	    }
	    var illegalCharacter = lang_1.RegExpWrapper.firstMatch(RESERVED_CHARS, path);
	    if (lang_1.isPresent(illegalCharacter)) {
	        throw new exceptions_1.BaseException("Path \"" + path + "\" contains \"" + illegalCharacter[0] + "\" which is not allowed in a route config.");
	    }
	}
	var PathMatch = (function () {
	    function PathMatch(instruction, remaining, remainingAux) {
	        this.instruction = instruction;
	        this.remaining = remaining;
	        this.remainingAux = remainingAux;
	    }
	    return PathMatch;
	})();
	exports.PathMatch = PathMatch;
	// represents something like '/foo/:bar'
	var PathRecognizer = (function () {
	    // TODO: cache component instruction instances by params and by ParsedUrl instance
	    function PathRecognizer(path, handler) {
	        this.path = path;
	        this.handler = handler;
	        this.terminal = true;
	        this._cache = new collection_1.Map();
	        assertPath(path);
	        var parsed = parsePathString(path);
	        this._segments = parsed['segments'];
	        this.specificity = parsed['specificity'];
	        this.hash = pathDslHash(this._segments);
	        var lastSegment = this._segments[this._segments.length - 1];
	        this.terminal = !(lastSegment instanceof ContinuationSegment);
	    }
	    PathRecognizer.prototype.recognize = function (beginningSegment) {
	        var nextSegment = beginningSegment;
	        var currentSegment;
	        var positionalParams = {};
	        var captured = [];
	        for (var i = 0; i < this._segments.length; i += 1) {
	            var segment = this._segments[i];
	            currentSegment = nextSegment;
	            if (segment instanceof ContinuationSegment) {
	                break;
	            }
	            if (lang_1.isPresent(currentSegment)) {
	                captured.push(currentSegment.path);
	                // the star segment consumes all of the remaining URL, including matrix params
	                if (segment instanceof StarSegment) {
	                    positionalParams[segment.name] = currentSegment.toString();
	                    nextSegment = null;
	                    break;
	                }
	                if (segment instanceof DynamicSegment) {
	                    positionalParams[segment.name] = currentSegment.path;
	                }
	                else if (!segment.match(currentSegment.path)) {
	                    return null;
	                }
	                nextSegment = currentSegment.child;
	            }
	            else if (!segment.match('')) {
	                return null;
	            }
	        }
	        if (this.terminal && lang_1.isPresent(nextSegment)) {
	            return null;
	        }
	        var urlPath = captured.join('/');
	        var auxiliary;
	        var instruction;
	        var urlParams;
	        var allParams;
	        if (lang_1.isPresent(currentSegment)) {
	            // If this is the root component, read query params. Otherwise, read matrix params.
	            var paramsSegment = beginningSegment instanceof url_parser_1.RootUrl ? beginningSegment : currentSegment;
	            allParams = lang_1.isPresent(paramsSegment.params) ?
	                collection_1.StringMapWrapper.merge(paramsSegment.params, positionalParams) :
	                positionalParams;
	            urlParams = url_parser_1.serializeParams(paramsSegment.params);
	            auxiliary = currentSegment.auxiliary;
	        }
	        else {
	            allParams = positionalParams;
	            auxiliary = [];
	            urlParams = [];
	        }
	        instruction = this._getInstruction(urlPath, urlParams, this, allParams);
	        return new PathMatch(instruction, nextSegment, auxiliary);
	    };
	    PathRecognizer.prototype.generate = function (params) {
	        var paramTokens = new TouchMap(params);
	        var path = [];
	        for (var i = 0; i < this._segments.length; i++) {
	            var segment = this._segments[i];
	            if (!(segment instanceof ContinuationSegment)) {
	                path.push(segment.generate(paramTokens));
	            }
	        }
	        var urlPath = path.join('/');
	        var nonPositionalParams = paramTokens.getUnused();
	        var urlParams = url_parser_1.serializeParams(nonPositionalParams);
	        return this._getInstruction(urlPath, urlParams, this, params);
	    };
	    PathRecognizer.prototype._getInstruction = function (urlPath, urlParams, _recognizer, params) {
	        var hashKey = urlPath + '?' + urlParams.join('?');
	        if (this._cache.has(hashKey)) {
	            return this._cache.get(hashKey);
	        }
	        var instruction = new instruction_1.ComponentInstruction_(urlPath, urlParams, _recognizer, params);
	        this._cache.set(hashKey, instruction);
	        return instruction;
	    };
	    return PathRecognizer;
	})();
	exports.PathRecognizer = PathRecognizer;
	//# sourceMappingURL=path_recognizer.js.map

/***/ },

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var collection_1 = __webpack_require__(175);
	var lang_1 = __webpack_require__(21);
	var exceptions_1 = __webpack_require__(177);
	/**
	 * This class represents a parsed URL
	 */
	var Url = (function () {
	    function Url(path, child, auxiliary, params) {
	        if (child === void 0) { child = null; }
	        if (auxiliary === void 0) { auxiliary = lang_1.CONST_EXPR([]); }
	        if (params === void 0) { params = null; }
	        this.path = path;
	        this.child = child;
	        this.auxiliary = auxiliary;
	        this.params = params;
	    }
	    Url.prototype.toString = function () {
	        return this.path + this._matrixParamsToString() + this._auxToString() + this._childString();
	    };
	    Url.prototype.segmentToString = function () { return this.path + this._matrixParamsToString(); };
	    /** @internal */
	    Url.prototype._auxToString = function () {
	        return this.auxiliary.length > 0 ?
	            ('(' + this.auxiliary.map(function (sibling) { return sibling.toString(); }).join('//') + ')') :
	            '';
	    };
	    Url.prototype._matrixParamsToString = function () {
	        if (lang_1.isBlank(this.params)) {
	            return '';
	        }
	        return ';' + serializeParams(this.params).join(';');
	    };
	    /** @internal */
	    Url.prototype._childString = function () { return lang_1.isPresent(this.child) ? ('/' + this.child.toString()) : ''; };
	    return Url;
	})();
	exports.Url = Url;
	var RootUrl = (function (_super) {
	    __extends(RootUrl, _super);
	    function RootUrl(path, child, auxiliary, params) {
	        if (child === void 0) { child = null; }
	        if (auxiliary === void 0) { auxiliary = lang_1.CONST_EXPR([]); }
	        if (params === void 0) { params = null; }
	        _super.call(this, path, child, auxiliary, params);
	    }
	    RootUrl.prototype.toString = function () {
	        return this.path + this._auxToString() + this._childString() + this._queryParamsToString();
	    };
	    RootUrl.prototype.segmentToString = function () { return this.path + this._queryParamsToString(); };
	    RootUrl.prototype._queryParamsToString = function () {
	        if (lang_1.isBlank(this.params)) {
	            return '';
	        }
	        return '?' + serializeParams(this.params).join('&');
	    };
	    return RootUrl;
	})(Url);
	exports.RootUrl = RootUrl;
	function pathSegmentsToUrl(pathSegments) {
	    var url = new Url(pathSegments[pathSegments.length - 1]);
	    for (var i = pathSegments.length - 2; i >= 0; i -= 1) {
	        url = new Url(pathSegments[i], url);
	    }
	    return url;
	}
	exports.pathSegmentsToUrl = pathSegmentsToUrl;
	var SEGMENT_RE = lang_1.RegExpWrapper.create('^[^\\/\\(\\)\\?;=&#]+');
	function matchUrlSegment(str) {
	    var match = lang_1.RegExpWrapper.firstMatch(SEGMENT_RE, str);
	    return lang_1.isPresent(match) ? match[0] : '';
	}
	var UrlParser = (function () {
	    function UrlParser() {
	    }
	    UrlParser.prototype.peekStartsWith = function (str) { return this._remaining.startsWith(str); };
	    UrlParser.prototype.capture = function (str) {
	        if (!this._remaining.startsWith(str)) {
	            throw new exceptions_1.BaseException("Expected \"" + str + "\".");
	        }
	        this._remaining = this._remaining.substring(str.length);
	    };
	    UrlParser.prototype.parse = function (url) {
	        this._remaining = url;
	        if (url == '' || url == '/') {
	            return new Url('');
	        }
	        return this.parseRoot();
	    };
	    // segment + (aux segments) + (query params)
	    UrlParser.prototype.parseRoot = function () {
	        if (this.peekStartsWith('/')) {
	            this.capture('/');
	        }
	        var path = matchUrlSegment(this._remaining);
	        this.capture(path);
	        var aux = [];
	        if (this.peekStartsWith('(')) {
	            aux = this.parseAuxiliaryRoutes();
	        }
	        if (this.peekStartsWith(';')) {
	            // TODO: should these params just be dropped?
	            this.parseMatrixParams();
	        }
	        var child = null;
	        if (this.peekStartsWith('/') && !this.peekStartsWith('//')) {
	            this.capture('/');
	            child = this.parseSegment();
	        }
	        var queryParams = null;
	        if (this.peekStartsWith('?')) {
	            queryParams = this.parseQueryParams();
	        }
	        return new RootUrl(path, child, aux, queryParams);
	    };
	    // segment + (matrix params) + (aux segments)
	    UrlParser.prototype.parseSegment = function () {
	        if (this._remaining.length == 0) {
	            return null;
	        }
	        if (this.peekStartsWith('/')) {
	            this.capture('/');
	        }
	        var path = matchUrlSegment(this._remaining);
	        this.capture(path);
	        var matrixParams = null;
	        if (this.peekStartsWith(';')) {
	            matrixParams = this.parseMatrixParams();
	        }
	        var aux = [];
	        if (this.peekStartsWith('(')) {
	            aux = this.parseAuxiliaryRoutes();
	        }
	        var child = null;
	        if (this.peekStartsWith('/') && !this.peekStartsWith('//')) {
	            this.capture('/');
	            child = this.parseSegment();
	        }
	        return new Url(path, child, aux, matrixParams);
	    };
	    UrlParser.prototype.parseQueryParams = function () {
	        var params = {};
	        this.capture('?');
	        this.parseParam(params);
	        while (this._remaining.length > 0 && this.peekStartsWith('&')) {
	            this.capture('&');
	            this.parseParam(params);
	        }
	        return params;
	    };
	    UrlParser.prototype.parseMatrixParams = function () {
	        var params = {};
	        while (this._remaining.length > 0 && this.peekStartsWith(';')) {
	            this.capture(';');
	            this.parseParam(params);
	        }
	        return params;
	    };
	    UrlParser.prototype.parseParam = function (params) {
	        var key = matchUrlSegment(this._remaining);
	        if (lang_1.isBlank(key)) {
	            return;
	        }
	        this.capture(key);
	        var value = true;
	        if (this.peekStartsWith('=')) {
	            this.capture('=');
	            var valueMatch = matchUrlSegment(this._remaining);
	            if (lang_1.isPresent(valueMatch)) {
	                value = valueMatch;
	                this.capture(value);
	            }
	        }
	        params[key] = value;
	    };
	    UrlParser.prototype.parseAuxiliaryRoutes = function () {
	        var routes = [];
	        this.capture('(');
	        while (!this.peekStartsWith(')') && this._remaining.length > 0) {
	            routes.push(this.parseSegment());
	            if (this.peekStartsWith('//')) {
	                this.capture('//');
	            }
	        }
	        this.capture(')');
	        return routes;
	    };
	    return UrlParser;
	})();
	exports.UrlParser = UrlParser;
	exports.parser = new UrlParser();
	function serializeParams(paramMap) {
	    var params = [];
	    if (lang_1.isPresent(paramMap)) {
	        collection_1.StringMapWrapper.forEach(paramMap, function (value, key) {
	            if (value == true) {
	                params.push(key);
	            }
	            else {
	                params.push(key + '=' + value);
	            }
	        });
	    }
	    return params;
	}
	exports.serializeParams = serializeParams;
	//# sourceMappingURL=url_parser.js.map

/***/ },

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(21);
	/**
	 * The `RouteConfig` decorator defines routes for a given component.
	 *
	 * It takes an array of {@link RouteDefinition}s.
	 */
	var RouteConfig = (function () {
	    function RouteConfig(configs) {
	        this.configs = configs;
	    }
	    RouteConfig = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Array])
	    ], RouteConfig);
	    return RouteConfig;
	})();
	exports.RouteConfig = RouteConfig;
	/**
	 * `Route` is a type of {@link RouteDefinition} used to route a path to a component.
	 *
	 * It has the following properties:
	 * - `path` is a string that uses the route matcher DSL.
	 * - `component` a component type.
	 * - `name` is an optional `CamelCase` string representing the name of the route.
	 * - `data` is an optional property of any type representing arbitrary route metadata for the given
	 * route. It is injectable via {@link RouteData}.
	 *
	 * ### Example
	 * ```
	 * import {RouteConfig} from 'angular2/router';
	 *
	 * @RouteConfig([
	 *   {path: '/home', component: HomeCmp, name: 'HomeCmp' }
	 * ])
	 * class MyApp {}
	 * ```
	 */
	var Route = (function () {
	    function Route(_a) {
	        var path = _a.path, component = _a.component, name = _a.name, data = _a.data;
	        // added next three properties to work around https://github.com/Microsoft/TypeScript/issues/4107
	        this.aux = null;
	        this.loader = null;
	        this.redirectTo = null;
	        this.path = path;
	        this.component = component;
	        this.name = name;
	        this.data = data;
	    }
	    Route = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Object])
	    ], Route);
	    return Route;
	})();
	exports.Route = Route;
	/**
	 * `AuxRoute` is a type of {@link RouteDefinition} used to define an auxiliary route.
	 *
	 * It takes an object with the following properties:
	 * - `path` is a string that uses the route matcher DSL.
	 * - `component` a component type.
	 * - `name` is an optional `CamelCase` string representing the name of the route.
	 * - `data` is an optional property of any type representing arbitrary route metadata for the given
	 * route. It is injectable via {@link RouteData}.
	 *
	 * ### Example
	 * ```
	 * import {RouteConfig, AuxRoute} from 'angular2/router';
	 *
	 * @RouteConfig([
	 *   new AuxRoute({path: '/home', component: HomeCmp})
	 * ])
	 * class MyApp {}
	 * ```
	 */
	var AuxRoute = (function () {
	    function AuxRoute(_a) {
	        var path = _a.path, component = _a.component, name = _a.name;
	        this.data = null;
	        // added next three properties to work around https://github.com/Microsoft/TypeScript/issues/4107
	        this.aux = null;
	        this.loader = null;
	        this.redirectTo = null;
	        this.path = path;
	        this.component = component;
	        this.name = name;
	    }
	    AuxRoute = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Object])
	    ], AuxRoute);
	    return AuxRoute;
	})();
	exports.AuxRoute = AuxRoute;
	/**
	 * `AsyncRoute` is a type of {@link RouteDefinition} used to route a path to an asynchronously
	 * loaded component.
	 *
	 * It has the following properties:
	 * - `path` is a string that uses the route matcher DSL.
	 * - `loader` is a function that returns a promise that resolves to a component.
	 * - `name` is an optional `CamelCase` string representing the name of the route.
	 * - `data` is an optional property of any type representing arbitrary route metadata for the given
	 * route. It is injectable via {@link RouteData}.
	 *
	 * ### Example
	 * ```
	 * import {RouteConfig} from 'angular2/router';
	 *
	 * @RouteConfig([
	 *   {path: '/home', loader: () => Promise.resolve(MyLoadedCmp), name: 'MyLoadedCmp'}
	 * ])
	 * class MyApp {}
	 * ```
	 */
	var AsyncRoute = (function () {
	    function AsyncRoute(_a) {
	        var path = _a.path, loader = _a.loader, name = _a.name, data = _a.data;
	        this.aux = null;
	        this.path = path;
	        this.loader = loader;
	        this.name = name;
	        this.data = data;
	    }
	    AsyncRoute = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Object])
	    ], AsyncRoute);
	    return AsyncRoute;
	})();
	exports.AsyncRoute = AsyncRoute;
	/**
	 * `Redirect` is a type of {@link RouteDefinition} used to route a path to an asynchronously loaded
	 * component.
	 *
	 * It has the following properties:
	 * - `path` is a string that uses the route matcher DSL.
	 * - `redirectTo` is a string representing the new URL to be matched against.
	 *
	 * ### Example
	 * ```
	 * import {RouteConfig} from 'angular2/router';
	 *
	 * @RouteConfig([
	 *   {path: '/', redirectTo: '/home'},
	 *   {path: '/home', component: HomeCmp}
	 * ])
	 * class MyApp {}
	 * ```
	 */
	var Redirect = (function () {
	    function Redirect(_a) {
	        var path = _a.path, redirectTo = _a.redirectTo;
	        this.name = null;
	        // added next three properties to work around https://github.com/Microsoft/TypeScript/issues/4107
	        this.loader = null;
	        this.data = null;
	        this.aux = null;
	        this.path = path;
	        this.redirectTo = redirectTo;
	    }
	    Redirect = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Object])
	    ], Redirect);
	    return Redirect;
	})();
	exports.Redirect = Redirect;
	//# sourceMappingURL=route_config_impl.js.map

/***/ },

/***/ 385:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(21);
	var AsyncRouteHandler = (function () {
	    function AsyncRouteHandler(_loader, data) {
	        this._loader = _loader;
	        this.data = data;
	        /** @internal */
	        this._resolvedComponent = null;
	    }
	    AsyncRouteHandler.prototype.resolveComponentType = function () {
	        var _this = this;
	        if (lang_1.isPresent(this._resolvedComponent)) {
	            return this._resolvedComponent;
	        }
	        return this._resolvedComponent = this._loader().then(function (componentType) {
	            _this.componentType = componentType;
	            return componentType;
	        });
	    };
	    return AsyncRouteHandler;
	})();
	exports.AsyncRouteHandler = AsyncRouteHandler;
	//# sourceMappingURL=async_route_handler.js.map

/***/ },

/***/ 386:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var async_1 = __webpack_require__(22);
	var SyncRouteHandler = (function () {
	    function SyncRouteHandler(componentType, data) {
	        this.componentType = componentType;
	        this.data = data;
	        /** @internal */
	        this._resolvedComponent = null;
	        this._resolvedComponent = async_1.PromiseWrapper.resolve(componentType);
	    }
	    SyncRouteHandler.prototype.resolveComponentType = function () { return this._resolvedComponent; };
	    return SyncRouteHandler;
	})();
	exports.SyncRouteHandler = SyncRouteHandler;
	//# sourceMappingURL=sync_route_handler.js.map

/***/ },

/***/ 387:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var route_config_decorator_1 = __webpack_require__(388);
	var lang_1 = __webpack_require__(21);
	var exceptions_1 = __webpack_require__(177);
	/**
	 * Given a JS Object that represents... returns a corresponding Route, AsyncRoute, or Redirect
	 */
	function normalizeRouteConfig(config) {
	    if (config instanceof route_config_decorator_1.Route || config instanceof route_config_decorator_1.Redirect || config instanceof route_config_decorator_1.AsyncRoute ||
	        config instanceof route_config_decorator_1.AuxRoute) {
	        return config;
	    }
	    if ((+!!config.component) + (+!!config.redirectTo) + (+!!config.loader) != 1) {
	        throw new exceptions_1.BaseException("Route config should contain exactly one \"component\", \"loader\", or \"redirectTo\" property.");
	    }
	    if (config.as && config.name) {
	        throw new exceptions_1.BaseException("Route config should contain exactly one \"as\" or \"name\" property.");
	    }
	    if (config.as) {
	        config.name = config.as;
	    }
	    if (config.loader) {
	        return new route_config_decorator_1.AsyncRoute({ path: config.path, loader: config.loader, name: config.name });
	    }
	    if (config.aux) {
	        return new route_config_decorator_1.AuxRoute({ path: config.aux, component: config.component, name: config.name });
	    }
	    if (config.component) {
	        if (typeof config.component == 'object') {
	            var componentDefinitionObject = config.component;
	            if (componentDefinitionObject.type == 'constructor') {
	                return new route_config_decorator_1.Route({
	                    path: config.path,
	                    component: componentDefinitionObject.constructor,
	                    name: config.name
	                });
	            }
	            else if (componentDefinitionObject.type == 'loader') {
	                return new route_config_decorator_1.AsyncRoute({ path: config.path, loader: componentDefinitionObject.loader, name: config.name });
	            }
	            else {
	                throw new exceptions_1.BaseException("Invalid component type \"" + componentDefinitionObject.type + "\". Valid types are \"constructor\" and \"loader\".");
	            }
	        }
	        return new route_config_decorator_1.Route(config);
	    }
	    if (config.redirectTo) {
	        return new route_config_decorator_1.Redirect({ path: config.path, redirectTo: config.redirectTo });
	    }
	    return config;
	}
	exports.normalizeRouteConfig = normalizeRouteConfig;
	function assertComponentExists(component, path) {
	    if (!lang_1.isType(component)) {
	        throw new exceptions_1.BaseException("Component for route \"" + path + "\" is not defined, or is not a class.");
	    }
	}
	exports.assertComponentExists = assertComponentExists;
	//# sourceMappingURL=route_config_nomalizer.js.map

/***/ },

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var route_config_impl_1 = __webpack_require__(384);
	var decorators_1 = __webpack_require__(172);
	var route_config_impl_2 = __webpack_require__(384);
	exports.Route = route_config_impl_2.Route;
	exports.Redirect = route_config_impl_2.Redirect;
	exports.AuxRoute = route_config_impl_2.AuxRoute;
	exports.AsyncRoute = route_config_impl_2.AsyncRoute;
	exports.RouteConfig = decorators_1.makeDecorator(route_config_impl_1.RouteConfig);
	//# sourceMappingURL=route_config_decorator.js.map

/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var dom_adapter_1 = __webpack_require__(260);
	var angular2_1 = __webpack_require__(17);
	var location_strategy_1 = __webpack_require__(379);
	/**
	 * `HashLocationStrategy` is a {@link LocationStrategy} used to configure the
	 * {@link Location} service to represent its state in the
	 * [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)
	 * of the browser's URL.
	 *
	 * For instance, if you call `location.go('/foo')`, the browser's URL will become
	 * `example.com#/foo`.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component, provide} from 'angular2/angular2';
	 * import {
	 *   ROUTER_DIRECTIVES,
	 *   ROUTER_PROVIDERS,
	 *   RouteConfig,
	 *   Location,
	 *   LocationStrategy,
	 *   HashLocationStrategy
	 * } from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   constructor(location: Location) {
	 *     location.go('/foo');
	 *   }
	 * }
	 *
	 * bootstrap(AppCmp, [
	 *   ROUTER_PROVIDERS,
	 *   provide(LocationStrategy, {useClass: HashLocationStrategy})
	 * ]);
	 * ```
	 */
	var HashLocationStrategy = (function (_super) {
	    __extends(HashLocationStrategy, _super);
	    function HashLocationStrategy() {
	        _super.call(this);
	        this._location = dom_adapter_1.DOM.getLocation();
	        this._history = dom_adapter_1.DOM.getHistory();
	    }
	    HashLocationStrategy.prototype.onPopState = function (fn) {
	        dom_adapter_1.DOM.getGlobalEventTarget('window').addEventListener('popstate', fn, false);
	    };
	    HashLocationStrategy.prototype.getBaseHref = function () { return ''; };
	    HashLocationStrategy.prototype.path = function () {
	        // the hash value is always prefixed with a `#`
	        // and if it is empty then it will stay empty
	        var path = this._location.hash;
	        // Dart will complain if a call to substring is
	        // executed with a position value that extends the
	        // length of string.
	        return (path.length > 0 ? path.substring(1) : path) +
	            location_strategy_1.normalizeQueryParams(this._location.search);
	    };
	    HashLocationStrategy.prototype.prepareExternalUrl = function (internal) {
	        return internal.length > 0 ? ('#' + internal) : internal;
	    };
	    HashLocationStrategy.prototype.pushState = function (state, title, path, queryParams) {
	        var url = path + location_strategy_1.normalizeQueryParams(queryParams);
	        if (url.length == 0) {
	            url = this._location.pathname;
	        }
	        else {
	            url = this.prepareExternalUrl(url);
	        }
	        this._history.pushState(state, title, url);
	    };
	    HashLocationStrategy.prototype.forward = function () { this._history.forward(); };
	    HashLocationStrategy.prototype.back = function () { this._history.back(); };
	    HashLocationStrategy = __decorate([
	        angular2_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], HashLocationStrategy);
	    return HashLocationStrategy;
	})(location_strategy_1.LocationStrategy);
	exports.HashLocationStrategy = HashLocationStrategy;
	//# sourceMappingURL=hash_location_strategy.js.map

/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var dom_adapter_1 = __webpack_require__(260);
	var angular2_1 = __webpack_require__(17);
	var location_strategy_1 = __webpack_require__(379);
	/**
	 * `PathLocationStrategy` is a {@link LocationStrategy} used to configure the
	 * {@link Location} service to represent its state in the
	 * [path](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax) of the
	 * browser's URL.
	 *
	 * `PathLocationStrategy` is the default binding for {@link LocationStrategy}
	 * provided in {@link ROUTER_PROVIDERS}.
	 *
	 * If you're using `PathLocationStrategy`, you must provide a provider for
	 * {@link APP_BASE_HREF} to a string representing the URL prefix that should
	 * be preserved when generating and recognizing URLs.
	 *
	 * For instance, if you provide an `APP_BASE_HREF` of `'/my/app'` and call
	 * `location.go('/foo')`, the browser's URL will become
	 * `example.com/my/app/foo`.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Component, provide} from 'angular2/angular2';
	 * import {
	 *   APP_BASE_HREF
	 *   ROUTER_DIRECTIVES,
	 *   ROUTER_PROVIDERS,
	 *   RouteConfig,
	 *   Location
	 * } from 'angular2/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   constructor(location: Location) {
	 *     location.go('/foo');
	 *   }
	 * }
	 *
	 * bootstrap(AppCmp, [
	 *   ROUTER_PROVIDERS, // includes binding to PathLocationStrategy
	 *   provide(APP_BASE_HREF, {useValue: '/my/app'})
	 * ]);
	 * ```
	 */
	var PathLocationStrategy = (function (_super) {
	    __extends(PathLocationStrategy, _super);
	    function PathLocationStrategy() {
	        _super.call(this);
	        this._location = dom_adapter_1.DOM.getLocation();
	        this._history = dom_adapter_1.DOM.getHistory();
	        this._baseHref = dom_adapter_1.DOM.getBaseHref();
	    }
	    PathLocationStrategy.prototype.onPopState = function (fn) {
	        dom_adapter_1.DOM.getGlobalEventTarget('window').addEventListener('popstate', fn, false);
	        dom_adapter_1.DOM.getGlobalEventTarget('window').addEventListener('hashchange', fn, false);
	    };
	    PathLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
	    PathLocationStrategy.prototype.prepareExternalUrl = function (internal) { return this._baseHref + internal; };
	    PathLocationStrategy.prototype.path = function () { return this._location.pathname + location_strategy_1.normalizeQueryParams(this._location.search); };
	    PathLocationStrategy.prototype.pushState = function (state, title, url, queryParams) {
	        this._history.pushState(state, title, (url + location_strategy_1.normalizeQueryParams(queryParams)));
	    };
	    PathLocationStrategy.prototype.forward = function () { this._history.forward(); };
	    PathLocationStrategy.prototype.back = function () { this._history.back(); };
	    PathLocationStrategy = __decorate([
	        angular2_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], PathLocationStrategy);
	    return PathLocationStrategy;
	})(location_strategy_1.LocationStrategy);
	exports.PathLocationStrategy = PathLocationStrategy;
	//# sourceMappingURL=path_location_strategy.js.map

/***/ },

/***/ 391:
/***/ function(module, exports) {

	'use strict';//# sourceMappingURL=route_definition.js.map

/***/ },

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

	'use strict';/**
	 * @module
	 * @description
	 * The http module provides services to perform http requests. To get started, see the {@link Http}
	 * class.
	 */
	var angular2_1 = __webpack_require__(17);
	var http_1 = __webpack_require__(393);
	var xhr_backend_1 = __webpack_require__(401);
	var jsonp_backend_1 = __webpack_require__(405);
	var browser_xhr_1 = __webpack_require__(404);
	var browser_jsonp_1 = __webpack_require__(406);
	var base_request_options_1 = __webpack_require__(399);
	var base_response_options_1 = __webpack_require__(403);
	var mock_backend_1 = __webpack_require__(407);
	exports.MockConnection = mock_backend_1.MockConnection;
	exports.MockBackend = mock_backend_1.MockBackend;
	var static_request_1 = __webpack_require__(395);
	exports.Request = static_request_1.Request;
	var static_response_1 = __webpack_require__(402);
	exports.Response = static_response_1.Response;
	var interfaces_1 = __webpack_require__(394);
	exports.Connection = interfaces_1.Connection;
	exports.ConnectionBackend = interfaces_1.ConnectionBackend;
	var browser_xhr_2 = __webpack_require__(404);
	exports.BrowserXhr = browser_xhr_2.BrowserXhr;
	var base_request_options_2 = __webpack_require__(399);
	exports.BaseRequestOptions = base_request_options_2.BaseRequestOptions;
	exports.RequestOptions = base_request_options_2.RequestOptions;
	var base_response_options_2 = __webpack_require__(403);
	exports.BaseResponseOptions = base_response_options_2.BaseResponseOptions;
	exports.ResponseOptions = base_response_options_2.ResponseOptions;
	var xhr_backend_2 = __webpack_require__(401);
	exports.XHRBackend = xhr_backend_2.XHRBackend;
	exports.XHRConnection = xhr_backend_2.XHRConnection;
	var jsonp_backend_2 = __webpack_require__(405);
	exports.JSONPBackend = jsonp_backend_2.JSONPBackend;
	exports.JSONPConnection = jsonp_backend_2.JSONPConnection;
	var http_2 = __webpack_require__(393);
	exports.Http = http_2.Http;
	exports.Jsonp = http_2.Jsonp;
	var headers_1 = __webpack_require__(396);
	exports.Headers = headers_1.Headers;
	var enums_1 = __webpack_require__(398);
	exports.ResponseTypes = enums_1.ResponseTypes;
	exports.ReadyStates = enums_1.ReadyStates;
	exports.RequestMethods = enums_1.RequestMethods;
	var url_search_params_1 = __webpack_require__(400);
	exports.URLSearchParams = url_search_params_1.URLSearchParams;
	/**
	 * Provides a basic set of injectables to use the {@link Http} service in any application.
	 *
	 * The `HTTP_PROVIDERS` should be included either in a component's injector,
	 * or in the root injector when bootstrapping an application.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/snj7Nv?p=preview))
	 *
	 * ```
	 * import {bootstrap, Component, NgFor, View} from 'angular2/angular2';
	 * import {HTTP_PROVIDERS, Http} from 'angular2/http';
	 *
	 * @Component({
	 *   selector: 'app',
	 *   providers: [HTTP_PROVIDERS],
	 *   template: `
	 *     <div>
	 *       <h1>People</h1>
	 *       <ul>
	 *         <li *ng-for="#person of people">
	 *           {{person.name}}
	 *         </li>
	 *       </ul>
	 *     </div>
	 *   `,
	 *   directives: [NgFor]
	 * })
	 * export class App {
	 *   people: Object[];
	 *   constructor(http:Http) {
	 *     http.get('people.json').subscribe(res => {
	 *       this.people = res.json();
	 *     });
	 *   }
	 *   active:boolean = false;
	 *   toggleActiveState() {
	 *     this.active = !this.active;
	 *   }
	 * }
	 *
	 * bootstrap(App)
	 *   .catch(err => console.error(err));
	 * ```
	 *
	 * The primary public API included in `HTTP_PROVIDERS` is the {@link Http} class.
	 * However, other providers required by `Http` are included,
	 * which may be beneficial to override in certain cases.
	 *
	 * The providers included in `HTTP_PROVIDERS` include:
	 *  * {@link Http}
	 *  * {@link XHRBackend}
	 *  * `BrowserXHR` - Private factory to create `XMLHttpRequest` instances
	 *  * {@link RequestOptions} - Bound to {@link BaseRequestOptions} class
	 *  * {@link ResponseOptions} - Bound to {@link BaseResponseOptions} class
	 *
	 * There may be cases where it makes sense to extend the base request options,
	 * such as to add a search string to be appended to all URLs.
	 * To accomplish this, a new provider for {@link RequestOptions} should
	 * be added in the same injector as `HTTP_PROVIDERS`.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/aCMEXi?p=preview))
	 *
	 * ```
	 * import {provide, bootstrap} from 'angular2/angular2';
	 * import {HTTP_PROVIDERS, BaseRequestOptions, RequestOptions} from 'angular2/http';
	 *
	 * class MyOptions extends BaseRequestOptions {
	 *   search: string = 'coreTeam=true';
	 * }
	 *
	 * bootstrap(App, [HTTP_PROVIDERS, provide(RequestOptions, {useClass: MyOptions})])
	 *   .catch(err => console.error(err));
	 * ```
	 *
	 * Likewise, to use a mock backend for unit tests, the {@link XHRBackend}
	 * provider should be bound to {@link MockBackend}.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/7LWALD?p=preview))
	 *
	 * ```
	 * import {provide, Injector} from 'angular2/angular2';
	 * import {HTTP_PROVIDERS, Http, Response, XHRBackend, MockBackend} from 'angular2/http';
	 *
	 * var people = [{name: 'Jeff'}, {name: 'Tobias'}];
	 *
	 * var injector = Injector.resolveAndCreate([
	 *   HTTP_PROVIDERS,
	 *   MockBackend,
	 *   provide(XHRBackend, {useExisting: MockBackend})
	 * ]);
	 * var http = injector.get(Http);
	 * var backend = injector.get(MockBackend);
	 *
	 * // Listen for any new requests
	 * backend.connections.observer({
	 *   next: connection => {
	 *     var response = new Response({body: people});
	 *     setTimeout(() => {
	 *       // Send a response to the request
	 *       connection.mockRespond(response);
	 *     });
	 *   });
	 *
	 * http.get('people.json').observer({
	 *   next: res => {
	 *     // Response came from mock backend
	 *     console.log('first person', res.json()[0].name);
	 *   }
	 * });
	 * ```
	 */
	exports.HTTP_PROVIDERS = [
	    // TODO(pascal): use factory type annotations once supported in DI
	    // issue: https://github.com/angular/angular/issues/3183
	    angular2_1.provide(http_1.Http, {
	        useFactory: function (xhrBackend, requestOptions) { return new http_1.Http(xhrBackend, requestOptions); },
	        deps: [xhr_backend_1.XHRBackend, base_request_options_1.RequestOptions]
	    }),
	    browser_xhr_1.BrowserXhr,
	    angular2_1.provide(base_request_options_1.RequestOptions, { useClass: base_request_options_1.BaseRequestOptions }),
	    angular2_1.provide(base_response_options_1.ResponseOptions, { useClass: base_response_options_1.BaseResponseOptions }),
	    xhr_backend_1.XHRBackend
	];
	/**
	 * @deprecated
	 */
	exports.HTTP_BINDINGS = exports.HTTP_PROVIDERS;
	/**
	 * Provides a basic set of providers to use the {@link Jsonp} service in any application.
	 *
	 * The `JSONP_PROVIDERS` should be included either in a component's injector,
	 * or in the root injector when bootstrapping an application.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/vmeN4F?p=preview))
	 *
	 * ```
	 * import {Component, NgFor, View} from 'angular2/angular2';
	 * import {JSONP_PROVIDERS, Jsonp} from 'angular2/http';
	 *
	 * @Component({
	 *   selector: 'app',
	 *   providers: [JSONP_PROVIDERS],
	 *   template: `
	 *     <div>
	 *       <h1>People</h1>
	 *       <ul>
	 *         <li *ng-for="#person of people">
	 *           {{person.name}}
	 *         </li>
	 *       </ul>
	 *     </div>
	 *   `,
	 *   directives: [NgFor]
	 * })
	 * export class App {
	 *   people: Array<Object>;
	 *   constructor(jsonp:Jsonp) {
	 *     jsonp.request('people.json').subscribe(res => {
	 *       this.people = res.json();
	 *     })
	 *   }
	 * }
	 * ```
	 *
	 * The primary public API included in `JSONP_PROVIDERS` is the {@link Jsonp} class.
	 * However, other providers required by `Jsonp` are included,
	 * which may be beneficial to override in certain cases.
	 *
	 * The providers included in `JSONP_PROVIDERS` include:
	 *  * {@link Jsonp}
	 *  * {@link JSONPBackend}
	 *  * `BrowserJsonp` - Private factory
	 *  * {@link RequestOptions} - Bound to {@link BaseRequestOptions} class
	 *  * {@link ResponseOptions} - Bound to {@link BaseResponseOptions} class
	 *
	 * There may be cases where it makes sense to extend the base request options,
	 * such as to add a search string to be appended to all URLs.
	 * To accomplish this, a new provider for {@link RequestOptions} should
	 * be added in the same injector as `JSONP_PROVIDERS`.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/TFug7x?p=preview))
	 *
	 * ```
	 * import {provide, bootstrap} from 'angular2/angular2';
	 * import {JSONP_PROVIDERS, BaseRequestOptions, RequestOptions} from 'angular2/http';
	 *
	 * class MyOptions extends BaseRequestOptions {
	 *   search: string = 'coreTeam=true';
	 * }
	 *
	 * bootstrap(App, [JSONP_PROVIDERS, provide(RequestOptions, {useClass: MyOptions})])
	 *   .catch(err => console.error(err));
	 * ```
	 *
	 * Likewise, to use a mock backend for unit tests, the {@link JSONPBackend}
	 * provider should be bound to {@link MockBackend}.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/HDqZWL?p=preview))
	 *
	 * ```
	 * import {provide, Injector} from 'angular2/angular2';
	 * import {JSONP_PROVIDERS, Jsonp, Response, JSONPBackend, MockBackend} from 'angular2/http';
	 *
	 * var people = [{name: 'Jeff'}, {name: 'Tobias'}];
	 * var injector = Injector.resolveAndCreate([
	 *   JSONP_PROVIDERS,
	 *   MockBackend,
	 *   provide(JSONPBackend, {useExisting: MockBackend})
	 * ]);
	 * var jsonp = injector.get(Jsonp);
	 * var backend = injector.get(MockBackend);
	 *
	 * // Listen for any new requests
	 * backend.connections.observer({
	 *   next: connection => {
	 *     var response = new Response({body: people});
	 *     setTimeout(() => {
	 *       // Send a response to the request
	 *       connection.mockRespond(response);
	 *     });
	 *   });
	
	 * jsonp.get('people.json').observer({
	 *   next: res => {
	 *     // Response came from mock backend
	 *     console.log('first person', res.json()[0].name);
	 *   }
	 * });
	 * ```
	 */
	exports.JSONP_PROVIDERS = [
	    // TODO(pascal): use factory type annotations once supported in DI
	    // issue: https://github.com/angular/angular/issues/3183
	    angular2_1.provide(http_1.Jsonp, {
	        useFactory: function (jsonpBackend, requestOptions) { return new http_1.Jsonp(jsonpBackend, requestOptions); },
	        deps: [jsonp_backend_1.JSONPBackend, base_request_options_1.RequestOptions]
	    }),
	    browser_jsonp_1.BrowserJsonp,
	    angular2_1.provide(base_request_options_1.RequestOptions, { useClass: base_request_options_1.BaseRequestOptions }),
	    angular2_1.provide(base_response_options_1.ResponseOptions, { useClass: base_response_options_1.BaseResponseOptions }),
	    angular2_1.provide(jsonp_backend_1.JSONPBackend, { useClass: jsonp_backend_1.JSONPBackend_ })
	];
	/**
	 * @deprecated
	 */
	exports.JSON_BINDINGS = exports.JSONP_PROVIDERS;
	//# sourceMappingURL=http.js.map

/***/ },

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(21);
	var exceptions_1 = __webpack_require__(177);
	var angular2_1 = __webpack_require__(17);
	var interfaces_1 = __webpack_require__(394);
	var static_request_1 = __webpack_require__(395);
	var base_request_options_1 = __webpack_require__(399);
	var enums_1 = __webpack_require__(398);
	function httpRequest(backend, request) {
	    return backend.createConnection(request).response;
	}
	function mergeOptions(defaultOpts, providedOpts, method, url) {
	    var newOptions = defaultOpts;
	    if (lang_1.isPresent(providedOpts)) {
	        // Hack so Dart can used named parameters
	        newOptions = newOptions.merge(new base_request_options_1.RequestOptions({
	            method: providedOpts.method,
	            url: providedOpts.url,
	            search: providedOpts.search,
	            headers: providedOpts.headers,
	            body: providedOpts.body
	        }));
	    }
	    if (lang_1.isPresent(method)) {
	        return newOptions.merge(new base_request_options_1.RequestOptions({ method: method, url: url }));
	    }
	    else {
	        return newOptions.merge(new base_request_options_1.RequestOptions({ url: url }));
	    }
	}
	/**
	 * Performs http requests using `XMLHttpRequest` as the default backend.
	 *
	 * `Http` is available as an injectable class, with methods to perform http requests. Calling
	 * `request` returns an {@link Observable} which will emit a single {@link Response} when a
	 * response is received.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * import {Http, HTTP_PROVIDERS} from 'angular2/http';
	 * @Component({
	 *   selector: 'http-app',
	 *   viewProviders: [HTTP_PROVIDERS],
	 *   templateUrl: 'people.html'
	 * })
	 * class PeopleComponent {
	 *   constructor(http: Http) {
	 *     http.get('people.json')
	 *       // Call map on the response observable to get the parsed people object
	 *       .map(res => res.json())
	 *       // Subscribe to the observable to get the parsed people object and attach it to the
	 *       // component
	 *       .subscribe(people => this.people = people);
	 *   }
	 * }
	 * ```
	 *
	 *
	 * ### Example
	 *
	 * ```
	 * http.get('people.json').observer({next: (value) => this.people = value});
	 * ```
	 *
	 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
	 * {@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
	 * the {@link XHRBackend} provider, as in the following example:
	 *
	 * ### Example
	 *
	 * ```typescript
	 * import {MockBackend, BaseRequestOptions, Http} from 'angular2/http';
	 * var injector = Injector.resolveAndCreate([
	 *   BaseRequestOptions,
	 *   MockBackend,
	 *   provide(Http, {useFactory:
	 *       function(backend, defaultOptions) {
	 *         return new Http(backend, defaultOptions);
	 *       },
	 *       deps: [MockBackend, BaseRequestOptions]})
	 * ]);
	 * var http = injector.get(Http);
	 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
	 * ```
	 *
	 **/
	var Http = (function () {
	    function Http(_backend, _defaultOptions) {
	        this._backend = _backend;
	        this._defaultOptions = _defaultOptions;
	    }
	    /**
	     * Performs any type of http request. First argument is required, and can either be a url or
	     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
	     * object can be provided as the 2nd argument. The options object will be merged with the values
	     * of {@link BaseRequestOptions} before performing the request.
	     */
	    Http.prototype.request = function (url, options) {
	        var responseObservable;
	        if (lang_1.isString(url)) {
	            responseObservable = httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions, options, enums_1.RequestMethods.Get, url)));
	        }
	        else if (url instanceof static_request_1.Request) {
	            responseObservable = httpRequest(this._backend, url);
	        }
	        else {
	            throw exceptions_1.makeTypeError('First argument must be a url string or Request instance.');
	        }
	        return responseObservable;
	    };
	    /**
	     * Performs a request with `get` http method.
	     */
	    Http.prototype.get = function (url, options) {
	        return httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions, options, enums_1.RequestMethods.Get, url)));
	    };
	    /**
	     * Performs a request with `post` http method.
	     */
	    Http.prototype.post = function (url, body, options) {
	        return httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions.merge(new base_request_options_1.RequestOptions({ body: body })), options, enums_1.RequestMethods.Post, url)));
	    };
	    /**
	     * Performs a request with `put` http method.
	     */
	    Http.prototype.put = function (url, body, options) {
	        return httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions.merge(new base_request_options_1.RequestOptions({ body: body })), options, enums_1.RequestMethods.Put, url)));
	    };
	    /**
	     * Performs a request with `delete` http method.
	     */
	    Http.prototype.delete = function (url, options) {
	        return httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions, options, enums_1.RequestMethods.Delete, url)));
	    };
	    /**
	     * Performs a request with `patch` http method.
	     */
	    Http.prototype.patch = function (url, body, options) {
	        return httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions.merge(new base_request_options_1.RequestOptions({ body: body })), options, enums_1.RequestMethods.Patch, url)));
	    };
	    /**
	     * Performs a request with `head` http method.
	     */
	    Http.prototype.head = function (url, options) {
	        return httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions, options, enums_1.RequestMethods.Head, url)));
	    };
	    Http = __decorate([
	        angular2_1.Injectable(), 
	        __metadata('design:paramtypes', [interfaces_1.ConnectionBackend, base_request_options_1.RequestOptions])
	    ], Http);
	    return Http;
	})();
	exports.Http = Http;
	var Jsonp = (function (_super) {
	    __extends(Jsonp, _super);
	    function Jsonp(backend, defaultOptions) {
	        _super.call(this, backend, defaultOptions);
	    }
	    /**
	     * Performs any type of http request. First argument is required, and can either be a url or
	     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
	     * object can be provided as the 2nd argument. The options object will be merged with the values
	     * of {@link BaseRequestOptions} before performing the request.
	     */
	    Jsonp.prototype.request = function (url, options) {
	        var responseObservable;
	        if (lang_1.isString(url)) {
	            url = new static_request_1.Request(mergeOptions(this._defaultOptions, options, enums_1.RequestMethods.Get, url));
	        }
	        if (url instanceof static_request_1.Request) {
	            if (url.method !== enums_1.RequestMethods.Get) {
	                exceptions_1.makeTypeError('JSONP requests must use GET request method.');
	            }
	            responseObservable = httpRequest(this._backend, url);
	        }
	        else {
	            throw exceptions_1.makeTypeError('First argument must be a url string or Request instance.');
	        }
	        return responseObservable;
	    };
	    Jsonp = __decorate([
	        angular2_1.Injectable(), 
	        __metadata('design:paramtypes', [interfaces_1.ConnectionBackend, base_request_options_1.RequestOptions])
	    ], Jsonp);
	    return Jsonp;
	})(Http);
	exports.Jsonp = Jsonp;
	//# sourceMappingURL=http.js.map

/***/ },

/***/ 394:
/***/ function(module, exports) {

	'use strict';/**
	 * Abstract class from which real backends are derived.
	 *
	 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
	 * {@link Request}.
	 */
	var ConnectionBackend = (function () {
	    function ConnectionBackend() {
	    }
	    return ConnectionBackend;
	})();
	exports.ConnectionBackend = ConnectionBackend;
	/**
	 * Abstract class from which real connections are derived.
	 */
	var Connection = (function () {
	    function Connection() {
	    }
	    return Connection;
	})();
	exports.Connection = Connection;
	//# sourceMappingURL=interfaces.js.map

/***/ },

/***/ 395:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var headers_1 = __webpack_require__(396);
	var http_utils_1 = __webpack_require__(397);
	var lang_1 = __webpack_require__(21);
	// TODO(jeffbcross): properly implement body accessors
	/**
	 * Creates `Request` instances from provided values.
	 *
	 * The Request's interface is inspired by the Request constructor defined in the [Fetch
	 * Spec](https://fetch.spec.whatwg.org/#request-class),
	 * but is considered a static value whose body can be accessed many times. There are other
	 * differences in the implementation, but this is the most significant.
	 *
	 * `Request` instances are typically created by higher-level classes, like {@link Http} and
	 * {@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
	 * One such example is when creating services that wrap higher-level services, like {@link Http},
	 * where it may be useful to generate a `Request` with arbitrary headers and search params.
	 *
	 * ```typescript
	 * import {Injectable, Injector} from 'angular2/angular2';
	 * import {HTTP_PROVIDERS, Http, Request, RequestMethods} from 'angular2/http';
	 *
	 * @Injectable()
	 * class AutoAuthenticator {
	 *   constructor(public http:Http) {}
	 *   request(url:string) {
	 *     return this.http.request(new Request({
	 *       method: RequestMethods.Get,
	 *       url: url,
	 *       search: 'password=123'
	 *     }));
	 *   }
	 * }
	 *
	 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
	 * var authenticator = injector.get(AutoAuthenticator);
	 * authenticator.request('people.json').subscribe(res => {
	 *   //URL should have included '?password=123'
	 *   console.log('people', res.json());
	 * });
	 * ```
	 */
	var Request = (function () {
	    function Request(requestOptions) {
	        // TODO: assert that url is present
	        var url = requestOptions.url;
	        this.url = requestOptions.url;
	        if (lang_1.isPresent(requestOptions.search)) {
	            var search = requestOptions.search.toString();
	            if (search.length > 0) {
	                var prefix = '?';
	                if (lang_1.StringWrapper.contains(this.url, '?')) {
	                    prefix = (this.url[this.url.length - 1] == '&') ? '' : '&';
	                }
	                // TODO: just delete search-query-looking string in url?
	                this.url = url + prefix + search;
	            }
	        }
	        this._body = requestOptions.body;
	        this.method = http_utils_1.normalizeMethodName(requestOptions.method);
	        // TODO(jeffbcross): implement behavior
	        // Defaults to 'omit', consistent with browser
	        // TODO(jeffbcross): implement behavior
	        this.headers = new headers_1.Headers(requestOptions.headers);
	    }
	    /**
	     * Returns the request's body as string, assuming that body exists. If body is undefined, return
	     * empty
	     * string.
	     */
	    Request.prototype.text = function () { return lang_1.isPresent(this._body) ? this._body.toString() : ''; };
	    return Request;
	})();
	exports.Request = Request;
	//# sourceMappingURL=static_request.js.map

/***/ },

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(21);
	var exceptions_1 = __webpack_require__(177);
	var collection_1 = __webpack_require__(175);
	/**
	 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
	 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
	 *
	 * The only known difference between this `Headers` implementation and the spec is the
	 * lack of an `entries` method.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/MTdwT6?p=preview))
	 *
	 * ```
	 * import {Headers} from 'angular2/http';
	 *
	 * var firstHeaders = new Headers();
	 * firstHeaders.append('Content-Type', 'image/jpeg');
	 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
	 *
	 * // Create headers from Plain Old JavaScript Object
	 * var secondHeaders = new Headers({
	 *   'X-My-Custom-Header': 'Angular'
	 * });
	 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
	 *
	 * var thirdHeaders = new Headers(secondHeaders);
	 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
	 * ```
	 */
	var Headers = (function () {
	    function Headers(headers) {
	        var _this = this;
	        if (headers instanceof Headers) {
	            this._headersMap = headers._headersMap;
	            return;
	        }
	        this._headersMap = new collection_1.Map();
	        if (lang_1.isBlank(headers)) {
	            return;
	        }
	        // headers instanceof StringMap
	        collection_1.StringMapWrapper.forEach(headers, function (v, k) { _this._headersMap.set(k, collection_1.isListLikeIterable(v) ? v : [v]); });
	    }
	    /**
	     * Appends a header to existing list of header values for a given header name.
	     */
	    Headers.prototype.append = function (name, value) {
	        var mapName = this._headersMap.get(name);
	        var list = collection_1.isListLikeIterable(mapName) ? mapName : [];
	        list.push(value);
	        this._headersMap.set(name, list);
	    };
	    /**
	     * Deletes all header values for the given name.
	     */
	    Headers.prototype.delete = function (name) { this._headersMap.delete(name); };
	    Headers.prototype.forEach = function (fn) {
	        this._headersMap.forEach(fn);
	    };
	    /**
	     * Returns first header that matches given name.
	     */
	    Headers.prototype.get = function (header) { return collection_1.ListWrapper.first(this._headersMap.get(header)); };
	    /**
	     * Check for existence of header by given name.
	     */
	    Headers.prototype.has = function (header) { return this._headersMap.has(header); };
	    /**
	     * Provides names of set headers
	     */
	    Headers.prototype.keys = function () { return collection_1.MapWrapper.keys(this._headersMap); };
	    /**
	     * Sets or overrides header value for given name.
	     */
	    Headers.prototype.set = function (header, value) {
	        var list = [];
	        if (collection_1.isListLikeIterable(value)) {
	            var pushValue = value.join(',');
	            list.push(pushValue);
	        }
	        else {
	            list.push(value);
	        }
	        this._headersMap.set(header, list);
	    };
	    /**
	     * Returns values of all headers.
	     */
	    Headers.prototype.values = function () { return collection_1.MapWrapper.values(this._headersMap); };
	    /**
	     * Returns list of header values for a given name.
	     */
	    Headers.prototype.getAll = function (header) {
	        var headers = this._headersMap.get(header);
	        return collection_1.isListLikeIterable(headers) ? headers : [];
	    };
	    /**
	     * This method is not implemented.
	     */
	    Headers.prototype.entries = function () { throw new exceptions_1.BaseException('"entries" method is not implemented on Headers class'); };
	    return Headers;
	})();
	exports.Headers = Headers;
	//# sourceMappingURL=headers.js.map

/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(21);
	var enums_1 = __webpack_require__(398);
	var exceptions_1 = __webpack_require__(177);
	function normalizeMethodName(method) {
	    if (lang_1.isString(method)) {
	        var originalMethod = method;
	        method = method.replace(/(\w)(\w*)/g, function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); });
	        method = enums_1.RequestMethods[method];
	        if (typeof method !== 'number')
	            throw exceptions_1.makeTypeError("Invalid request method. The method \"" + originalMethod + "\" is not supported.");
	    }
	    return method;
	}
	exports.normalizeMethodName = normalizeMethodName;
	var lang_2 = __webpack_require__(21);
	exports.isJsObject = lang_2.isJsObject;
	//# sourceMappingURL=http_utils.js.map

/***/ },

/***/ 398:
/***/ function(module, exports) {

	'use strict';/**
	 * Supported http methods.
	 */
	(function (RequestMethods) {
	    RequestMethods[RequestMethods["Get"] = 0] = "Get";
	    RequestMethods[RequestMethods["Post"] = 1] = "Post";
	    RequestMethods[RequestMethods["Put"] = 2] = "Put";
	    RequestMethods[RequestMethods["Delete"] = 3] = "Delete";
	    RequestMethods[RequestMethods["Options"] = 4] = "Options";
	    RequestMethods[RequestMethods["Head"] = 5] = "Head";
	    RequestMethods[RequestMethods["Patch"] = 6] = "Patch";
	})(exports.RequestMethods || (exports.RequestMethods = {}));
	var RequestMethods = exports.RequestMethods;
	/**
	 * All possible states in which a connection can be, based on
	 * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
	 * additional "CANCELLED" state.
	 */
	(function (ReadyStates) {
	    ReadyStates[ReadyStates["Unsent"] = 0] = "Unsent";
	    ReadyStates[ReadyStates["Open"] = 1] = "Open";
	    ReadyStates[ReadyStates["HeadersReceived"] = 2] = "HeadersReceived";
	    ReadyStates[ReadyStates["Loading"] = 3] = "Loading";
	    ReadyStates[ReadyStates["Done"] = 4] = "Done";
	    ReadyStates[ReadyStates["Cancelled"] = 5] = "Cancelled";
	})(exports.ReadyStates || (exports.ReadyStates = {}));
	var ReadyStates = exports.ReadyStates;
	/**
	 * Acceptable response types to be associated with a {@link Response}, based on
	 * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
	 */
	(function (ResponseTypes) {
	    ResponseTypes[ResponseTypes["Basic"] = 0] = "Basic";
	    ResponseTypes[ResponseTypes["Cors"] = 1] = "Cors";
	    ResponseTypes[ResponseTypes["Default"] = 2] = "Default";
	    ResponseTypes[ResponseTypes["Error"] = 3] = "Error";
	    ResponseTypes[ResponseTypes["Opaque"] = 4] = "Opaque";
	})(exports.ResponseTypes || (exports.ResponseTypes = {}));
	var ResponseTypes = exports.ResponseTypes;
	//# sourceMappingURL=enums.js.map

/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(21);
	var headers_1 = __webpack_require__(396);
	var enums_1 = __webpack_require__(398);
	var angular2_1 = __webpack_require__(17);
	var url_search_params_1 = __webpack_require__(400);
	var http_utils_1 = __webpack_require__(397);
	/**
	 * Creates a request options object to be optionally provided when instantiating a
	 * {@link Request}.
	 *
	 * This class is based on the `RequestInit` description in the [Fetch
	 * Spec](https://fetch.spec.whatwg.org/#requestinit).
	 *
	 * All values are null by default. Typical defaults can be found in the {@link BaseRequestOptions}
	 * class, which sub-classes `RequestOptions`.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/7Wvi3lfLq41aQPKlxB4O?p=preview))
	 *
	 * ```typescript
	 * import {RequestOptions, Request, RequestMethods} from 'angular2/http';
	 *
	 * var options = new RequestOptions({
	 *   method: RequestMethods.Post,
	 *   url: 'https://google.com'
	 * });
	 * var req = new Request(options);
	 * console.log('req.method:', RequestMethods[req.method]); // Post
	 * console.log('options.url:', options.url); // https://google.com
	 * ```
	 */
	var RequestOptions = (function () {
	    function RequestOptions(_a) {
	        var _b = _a === void 0 ? {} : _a, method = _b.method, headers = _b.headers, body = _b.body, url = _b.url, search = _b.search;
	        this.method = lang_1.isPresent(method) ? http_utils_1.normalizeMethodName(method) : null;
	        this.headers = lang_1.isPresent(headers) ? headers : null;
	        this.body = lang_1.isPresent(body) ? body : null;
	        this.url = lang_1.isPresent(url) ? url : null;
	        this.search = lang_1.isPresent(search) ? (lang_1.isString(search) ? new url_search_params_1.URLSearchParams((search)) :
	            (search)) :
	            null;
	    }
	    /**
	     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
	     * existing values. This method will not change the values of the instance on which it is being
	     * called.
	     *
	     * Note that `headers` and `search` will override existing values completely if present in
	     * the `options` object. If these values should be merged, it should be done prior to calling
	     * `merge` on the `RequestOptions` instance.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/6w8XA8YTkDRcPYpdB9dk?p=preview))
	     *
	     * ```typescript
	     * import {RequestOptions, Request, RequestMethods} from 'angular2/http';
	     *
	     * var options = new RequestOptions({
	     *   method: RequestMethods.Post
	     * });
	     * var req = new Request(options.merge({
	     *   url: 'https://google.com'
	     * }));
	     * console.log('req.method:', RequestMethods[req.method]); // Post
	     * console.log('options.url:', options.url); // null
	     * console.log('req.url:', req.url); // https://google.com
	     * ```
	     */
	    RequestOptions.prototype.merge = function (options) {
	        return new RequestOptions({
	            method: lang_1.isPresent(options) && lang_1.isPresent(options.method) ? options.method : this.method,
	            headers: lang_1.isPresent(options) && lang_1.isPresent(options.headers) ? options.headers : this.headers,
	            body: lang_1.isPresent(options) && lang_1.isPresent(options.body) ? options.body : this.body,
	            url: lang_1.isPresent(options) && lang_1.isPresent(options.url) ? options.url : this.url,
	            search: lang_1.isPresent(options) && lang_1.isPresent(options.search) ?
	                (lang_1.isString(options.search) ? new url_search_params_1.URLSearchParams((options.search)) :
	                    (options.search).clone()) :
	                this.search
	        });
	    };
	    return RequestOptions;
	})();
	exports.RequestOptions = RequestOptions;
	/**
	 * Subclass of {@link RequestOptions}, with default values.
	 *
	 * Default values:
	 *  * method: {@link RequestMethods RequestMethods.Get}
	 *  * headers: empty {@link Headers} object
	 *
	 * This class could be extended and bound to the {@link RequestOptions} class
	 * when configuring an {@link Injector}, in order to override the default options
	 * used by {@link Http} to create and send {@link Request Requests}.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/LEKVSx?p=preview))
	 *
	 * ```typescript
	 * import {provide, bootstrap} from 'angular2/angular2';
	 * import {HTTP_PROVIDERS, Http, BaseRequestOptions, RequestOptions} from 'angular2/http';
	 * import {App} from './myapp';
	 *
	 * class MyOptions extends BaseRequestOptions {
	 *   search: string = 'coreTeam=true';
	 * }
	 *
	 * bootstrap(App, [HTTP_PROVIDERS, provide(RequestOptions, {useClass: MyOptions})]);
	 * ```
	 *
	 * The options could also be extended when manually creating a {@link Request}
	 * object.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/oyBoEvNtDhOSfi9YxaVb?p=preview))
	 *
	 * ```
	 * import {BaseRequestOptions, Request, RequestMethods} from 'angular2/http';
	 *
	 * var options = new BaseRequestOptions();
	 * var req = new Request(options.merge({
	 *   method: RequestMethods.Post,
	 *   url: 'https://google.com'
	 * }));
	 * console.log('req.method:', RequestMethods[req.method]); // Post
	 * console.log('options.url:', options.url); // null
	 * console.log('req.url:', req.url); // https://google.com
	 * ```
	 */
	var BaseRequestOptions = (function (_super) {
	    __extends(BaseRequestOptions, _super);
	    function BaseRequestOptions() {
	        _super.call(this, { method: enums_1.RequestMethods.Get, headers: new headers_1.Headers() });
	    }
	    BaseRequestOptions = __decorate([
	        angular2_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], BaseRequestOptions);
	    return BaseRequestOptions;
	})(RequestOptions);
	exports.BaseRequestOptions = BaseRequestOptions;
	//# sourceMappingURL=base_request_options.js.map

/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(21);
	var collection_1 = __webpack_require__(175);
	function paramParser(rawParams) {
	    if (rawParams === void 0) { rawParams = ''; }
	    var map = new collection_1.Map();
	    if (rawParams.length > 0) {
	        var params = rawParams.split('&');
	        params.forEach(function (param) {
	            var split = param.split('=');
	            var key = split[0];
	            var val = split[1];
	            var list = lang_1.isPresent(map.get(key)) ? map.get(key) : [];
	            list.push(val);
	            map.set(key, list);
	        });
	    }
	    return map;
	}
	/**
	 * Map-like representation of url search parameters, based on
	 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
	 * with several extensions for merging URLSearchParams objects:
	 *   - setAll()
	 *   - appendAll()
	 *   - replaceAll()
	 */
	var URLSearchParams = (function () {
	    function URLSearchParams(rawParams) {
	        if (rawParams === void 0) { rawParams = ''; }
	        this.rawParams = rawParams;
	        this.paramsMap = paramParser(rawParams);
	    }
	    URLSearchParams.prototype.clone = function () {
	        var clone = new URLSearchParams();
	        clone.appendAll(this);
	        return clone;
	    };
	    URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
	    URLSearchParams.prototype.get = function (param) {
	        var storedParam = this.paramsMap.get(param);
	        if (collection_1.isListLikeIterable(storedParam)) {
	            return collection_1.ListWrapper.first(storedParam);
	        }
	        else {
	            return null;
	        }
	    };
	    URLSearchParams.prototype.getAll = function (param) {
	        var mapParam = this.paramsMap.get(param);
	        return lang_1.isPresent(mapParam) ? mapParam : [];
	    };
	    URLSearchParams.prototype.set = function (param, val) {
	        var mapParam = this.paramsMap.get(param);
	        var list = lang_1.isPresent(mapParam) ? mapParam : [];
	        collection_1.ListWrapper.clear(list);
	        list.push(val);
	        this.paramsMap.set(param, list);
	    };
	    // A merge operation
	    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
	    //
	    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
	    //
	    // TODO(@caitp): document this better
	    URLSearchParams.prototype.setAll = function (searchParams) {
	        var _this = this;
	        searchParams.paramsMap.forEach(function (value, param) {
	            var mapParam = _this.paramsMap.get(param);
	            var list = lang_1.isPresent(mapParam) ? mapParam : [];
	            collection_1.ListWrapper.clear(list);
	            list.push(value[0]);
	            _this.paramsMap.set(param, list);
	        });
	    };
	    URLSearchParams.prototype.append = function (param, val) {
	        var mapParam = this.paramsMap.get(param);
	        var list = lang_1.isPresent(mapParam) ? mapParam : [];
	        list.push(val);
	        this.paramsMap.set(param, list);
	    };
	    // A merge operation
	    // For each name-values pair in `searchParams`, perform `append(name, value)`
	    // for each value in `values`.
	    //
	    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
	    //
	    // TODO(@caitp): document this better
	    URLSearchParams.prototype.appendAll = function (searchParams) {
	        var _this = this;
	        searchParams.paramsMap.forEach(function (value, param) {
	            var mapParam = _this.paramsMap.get(param);
	            var list = lang_1.isPresent(mapParam) ? mapParam : [];
	            for (var i = 0; i < value.length; ++i) {
	                list.push(value[i]);
	            }
	            _this.paramsMap.set(param, list);
	        });
	    };
	    // A merge operation
	    // For each name-values pair in `searchParams`, perform `delete(name)`,
	    // followed by `set(name, values)`
	    //
	    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
	    //
	    // TODO(@caitp): document this better
	    URLSearchParams.prototype.replaceAll = function (searchParams) {
	        var _this = this;
	        searchParams.paramsMap.forEach(function (value, param) {
	            var mapParam = _this.paramsMap.get(param);
	            var list = lang_1.isPresent(mapParam) ? mapParam : [];
	            collection_1.ListWrapper.clear(list);
	            for (var i = 0; i < value.length; ++i) {
	                list.push(value[i]);
	            }
	            _this.paramsMap.set(param, list);
	        });
	    };
	    URLSearchParams.prototype.toString = function () {
	        var paramsList = [];
	        this.paramsMap.forEach(function (values, k) { values.forEach(function (v) { return paramsList.push(k + '=' + v); }); });
	        return paramsList.join('&');
	    };
	    URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
	    return URLSearchParams;
	})();
	exports.URLSearchParams = URLSearchParams;
	//# sourceMappingURL=url_search_params.js.map

/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var enums_1 = __webpack_require__(398);
	var static_response_1 = __webpack_require__(402);
	var base_response_options_1 = __webpack_require__(403);
	var angular2_1 = __webpack_require__(17);
	var browser_xhr_1 = __webpack_require__(404);
	var lang_1 = __webpack_require__(21);
	var angular2_2 = __webpack_require__(17);
	/**
	* Creates connections using `XMLHttpRequest`. Given a fully-qualified
	* request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
	* request.
	*
	* This class would typically not be created or interacted with directly inside applications, though
	* the {@link MockConnection} may be interacted with in tests.
	*/
	var XHRConnection = (function () {
	    function XHRConnection(req, browserXHR, baseResponseOptions) {
	        var _this = this;
	        this.request = req;
	        this.response = new angular2_2.Observable(function (responseObserver) {
	            var _xhr = browserXHR.build();
	            _xhr.open(enums_1.RequestMethods[req.method].toUpperCase(), req.url);
	            // load event handler
	            var onLoad = function () {
	                // responseText is the old-school way of retrieving response (supported by IE8 & 9)
	                // response/responseType properties were introduced in XHR Level2 spec (supported by
	                // IE10)
	                var response = lang_1.isPresent(_xhr.response) ? _xhr.response : _xhr.responseText;
	                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
	                var status = _xhr.status === 1223 ? 204 : _xhr.status;
	                // fix status code when it is 0 (0 status is undocumented).
	                // Occurs when accessing file resources or on Android 4.1 stock browser
	                // while retrieving files from application cache.
	                if (status === 0) {
	                    status = response ? 200 : 0;
	                }
	                var responseOptions = new base_response_options_1.ResponseOptions({ body: response, status: status });
	                if (lang_1.isPresent(baseResponseOptions)) {
	                    responseOptions = baseResponseOptions.merge(responseOptions);
	                }
	                responseObserver.next(new static_response_1.Response(responseOptions));
	                // TODO(gdi2290): defer complete if array buffer until done
	                responseObserver.complete();
	            };
	            // error event handler
	            var onError = function (err) {
	                var responseOptions = new base_response_options_1.ResponseOptions({ body: err, type: enums_1.ResponseTypes.Error });
	                if (lang_1.isPresent(baseResponseOptions)) {
	                    responseOptions = baseResponseOptions.merge(responseOptions);
	                }
	                responseObserver.error(new static_response_1.Response(responseOptions));
	            };
	            if (lang_1.isPresent(req.headers)) {
	                req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
	            }
	            _xhr.addEventListener('load', onLoad);
	            _xhr.addEventListener('error', onError);
	            _xhr.send(_this.request.text());
	            return function () {
	                _xhr.removeEventListener('load', onLoad);
	                _xhr.removeEventListener('error', onError);
	                _xhr.abort();
	            };
	        });
	    }
	    return XHRConnection;
	})();
	exports.XHRConnection = XHRConnection;
	/**
	 * Creates {@link XHRConnection} instances.
	 *
	 * This class would typically not be used by end users, but could be
	 * overridden if a different backend implementation should be used,
	 * such as in a node backend.
	 *
	 * ### Example
	 *
	 * ```
	 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from 'angular2/http';
	 * @Component({
	 *   viewProviders: [
	 *     HTTP_PROVIDERS,
	 *     provide(Http, {useFactory: (backend, options) => {
	 *       return new Http(backend, options);
	 *     }, deps: [MyNodeBackend, BaseRequestOptions]})]
	 * })
	 * class MyComponent {
	 *   constructor(http:Http) {
	 *     http.request('people.json').subscribe(res => this.people = res.json());
	 *   }
	 * }
	 * ```
	 *
	 **/
	var XHRBackend = (function () {
	    function XHRBackend(_browserXHR, _baseResponseOptions) {
	        this._browserXHR = _browserXHR;
	        this._baseResponseOptions = _baseResponseOptions;
	    }
	    XHRBackend.prototype.createConnection = function (request) {
	        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
	    };
	    XHRBackend = __decorate([
	        angular2_1.Injectable(), 
	        __metadata('design:paramtypes', [browser_xhr_1.BrowserXhr, base_response_options_1.ResponseOptions])
	    ], XHRBackend);
	    return XHRBackend;
	})();
	exports.XHRBackend = XHRBackend;
	//# sourceMappingURL=xhr_backend.js.map

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var lang_1 = __webpack_require__(21);
	var exceptions_1 = __webpack_require__(177);
	var http_utils_1 = __webpack_require__(397);
	/**
	 * Creates `Response` instances from provided values.
	 *
	 * Though this object isn't
	 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
	 * add data to a view.
	 *
	 * ### Example
	 *
	 * ```
	 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
	 * ```
	 *
	 * The Response's interface is inspired by the Response constructor defined in the [Fetch
	 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
	 * can be accessed many times. There are other differences in the implementation, but this is the
	 * most significant.
	 */
	var Response = (function () {
	    function Response(responseOptions) {
	        this._body = responseOptions.body;
	        this.status = responseOptions.status;
	        this.statusText = responseOptions.statusText;
	        this.headers = responseOptions.headers;
	        this.type = responseOptions.type;
	        this.url = responseOptions.url;
	    }
	    /**
	     * Not yet implemented
	     */
	    // TODO: Blob return type
	    Response.prototype.blob = function () { throw new exceptions_1.BaseException('"blob()" method not implemented on Response superclass'); };
	    /**
	     * Attempts to return body as parsed `JSON` object, or raises an exception.
	     */
	    Response.prototype.json = function () {
	        var jsonResponse;
	        if (http_utils_1.isJsObject(this._body)) {
	            jsonResponse = this._body;
	        }
	        else if (lang_1.isString(this._body)) {
	            jsonResponse = lang_1.Json.parse(this._body);
	        }
	        return jsonResponse;
	    };
	    /**
	     * Returns the body as a string, presuming `toString()` can be called on the response body.
	     */
	    Response.prototype.text = function () { return this._body.toString(); };
	    /**
	     * Not yet implemented
	     */
	    // TODO: ArrayBuffer return type
	    Response.prototype.arrayBuffer = function () {
	        throw new exceptions_1.BaseException('"arrayBuffer()" method not implemented on Response superclass');
	    };
	    return Response;
	})();
	exports.Response = Response;
	//# sourceMappingURL=static_response.js.map

/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(17);
	var lang_1 = __webpack_require__(21);
	var headers_1 = __webpack_require__(396);
	var enums_1 = __webpack_require__(398);
	/**
	 * Creates a response options object to be optionally provided when instantiating a
	 * {@link Response}.
	 *
	 * This class is based on the `ResponseInit` description in the [Fetch
	 * Spec](https://fetch.spec.whatwg.org/#responseinit).
	 *
	 * All values are null by default. Typical defaults can be found in the
	 * {@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
	 *
	 * This class may be used in tests to build {@link Response Responses} for
	 * mock responses (see {@link MockBackend}).
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/P9Jkk8e8cz6NVzbcxEsD?p=preview))
	 *
	 * ```typescript
	 * import {ResponseOptions, Response} from 'angular2/http';
	 *
	 * var options = new ResponseOptions({
	 *   body: '{"name":"Jeff"}'
	 * });
	 * var res = new Response(options);
	 *
	 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
	 * ```
	 */
	var ResponseOptions = (function () {
	    function ResponseOptions(_a) {
	        var _b = _a === void 0 ? {} : _a, body = _b.body, status = _b.status, headers = _b.headers, statusText = _b.statusText, type = _b.type, url = _b.url;
	        this.body = lang_1.isPresent(body) ? body : null;
	        this.status = lang_1.isPresent(status) ? status : null;
	        this.headers = lang_1.isPresent(headers) ? headers : null;
	        this.statusText = lang_1.isPresent(statusText) ? statusText : null;
	        this.type = lang_1.isPresent(type) ? type : null;
	        this.url = lang_1.isPresent(url) ? url : null;
	    }
	    /**
	     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
	     * override
	     * existing values. This method will not change the values of the instance on which it is being
	     * called.
	     *
	     * This may be useful when sharing a base `ResponseOptions` object inside tests,
	     * where certain properties may change from test to test.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
	     *
	     * ```typescript
	     * import {ResponseOptions, Response} from 'angular2/http';
	     *
	     * var options = new ResponseOptions({
	     *   body: {name: 'Jeff'}
	     * });
	     * var res = new Response(options.merge({
	     *   url: 'https://google.com'
	     * }));
	     * console.log('options.url:', options.url); // null
	     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
	     * console.log('res.url:', res.url); // https://google.com
	     * ```
	     */
	    ResponseOptions.prototype.merge = function (options) {
	        return new ResponseOptions({
	            body: lang_1.isPresent(options) && lang_1.isPresent(options.body) ? options.body : this.body,
	            status: lang_1.isPresent(options) && lang_1.isPresent(options.status) ? options.status : this.status,
	            headers: lang_1.isPresent(options) && lang_1.isPresent(options.headers) ? options.headers : this.headers,
	            statusText: lang_1.isPresent(options) && lang_1.isPresent(options.statusText) ? options.statusText :
	                this.statusText,
	            type: lang_1.isPresent(options) && lang_1.isPresent(options.type) ? options.type : this.type,
	            url: lang_1.isPresent(options) && lang_1.isPresent(options.url) ? options.url : this.url,
	        });
	    };
	    return ResponseOptions;
	})();
	exports.ResponseOptions = ResponseOptions;
	/**
	 * Subclass of {@link ResponseOptions}, with default values.
	 *
	 * Default values:
	 *  * status: 200
	 *  * headers: empty {@link Headers} object
	 *
	 * This class could be extended and bound to the {@link ResponseOptions} class
	 * when configuring an {@link Injector}, in order to override the default options
	 * used by {@link Http} to create {@link Response Responses}.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/qv8DLT?p=preview))
	 *
	 * ```typescript
	 * import {provide, bootstrap} from 'angular2/angular2';
	 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
	 * 'angular2/http';
	 * import {App} from './myapp';
	 *
	 * class MyOptions extends BaseResponseOptions {
	 *   headers:Headers = new Headers({network: 'github'});
	 * }
	 *
	 * bootstrap(App, [HTTP_PROVIDERS, provide(ResponseOptions, {useClass: MyOptions})]);
	 * ```
	 *
	 * The options could also be extended when manually creating a {@link Response}
	 * object.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/VngosOWiaExEtbstDoix?p=preview))
	 *
	 * ```
	 * import {BaseResponseOptions, Response} from 'angular2/http';
	 *
	 * var options = new BaseResponseOptions();
	 * var res = new Response(options.merge({
	 *   body: 'Angular2',
	 *   headers: new Headers({framework: 'angular'})
	 * }));
	 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
	 * console.log('res.text():', res.text()); // Angular2;
	 * ```
	 */
	var BaseResponseOptions = (function (_super) {
	    __extends(BaseResponseOptions, _super);
	    function BaseResponseOptions() {
	        _super.call(this, { status: 200, statusText: 'Ok', type: enums_1.ResponseTypes.Default, headers: new headers_1.Headers() });
	    }
	    BaseResponseOptions = __decorate([
	        angular2_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], BaseResponseOptions);
	    return BaseResponseOptions;
	})(ResponseOptions);
	exports.BaseResponseOptions = BaseResponseOptions;
	//# sourceMappingURL=base_response_options.js.map

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(17);
	// Make sure not to evaluate this in a non-browser environment!
	var BrowserXhr = (function () {
	    function BrowserXhr() {
	    }
	    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
	    BrowserXhr = __decorate([
	        angular2_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], BrowserXhr);
	    return BrowserXhr;
	})();
	exports.BrowserXhr = BrowserXhr;
	//# sourceMappingURL=browser_xhr.js.map

/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var interfaces_1 = __webpack_require__(394);
	var enums_1 = __webpack_require__(398);
	var static_response_1 = __webpack_require__(402);
	var base_response_options_1 = __webpack_require__(403);
	var angular2_1 = __webpack_require__(17);
	var browser_jsonp_1 = __webpack_require__(406);
	var exceptions_1 = __webpack_require__(177);
	var lang_1 = __webpack_require__(21);
	var angular2_2 = __webpack_require__(17);
	var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
	var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
	var JSONPConnection = (function () {
	    function JSONPConnection() {
	    }
	    return JSONPConnection;
	})();
	exports.JSONPConnection = JSONPConnection;
	var JSONPConnection_ = (function (_super) {
	    __extends(JSONPConnection_, _super);
	    function JSONPConnection_(req, _dom, baseResponseOptions) {
	        var _this = this;
	        _super.call(this);
	        this._dom = _dom;
	        this.baseResponseOptions = baseResponseOptions;
	        this._finished = false;
	        if (req.method !== enums_1.RequestMethods.Get) {
	            throw exceptions_1.makeTypeError(JSONP_ERR_WRONG_METHOD);
	        }
	        this.request = req;
	        this.response = new angular2_2.Observable(function (responseObserver) {
	            _this.readyState = enums_1.ReadyStates.Loading;
	            var id = _this._id = _dom.nextRequestID();
	            _dom.exposeConnection(id, _this);
	            // Workaround Dart
	            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
	            var callback = _dom.requestCallback(_this._id);
	            var url = req.url;
	            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
	                url = lang_1.StringWrapper.replace(url, '=JSONP_CALLBACK&', "=" + callback + "&");
	            }
	            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
	                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
	            }
	            var script = _this._script = _dom.build(url);
	            var onLoad = function (event) {
	                if (_this.readyState === enums_1.ReadyStates.Cancelled)
	                    return;
	                _this.readyState = enums_1.ReadyStates.Done;
	                _dom.cleanup(script);
	                if (!_this._finished) {
	                    var responseOptions_1 = new base_response_options_1.ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: enums_1.ResponseTypes.Error });
	                    if (lang_1.isPresent(baseResponseOptions)) {
	                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
	                    }
	                    responseObserver.error(new static_response_1.Response(responseOptions_1));
	                    return;
	                }
	                var responseOptions = new base_response_options_1.ResponseOptions({ body: _this._responseData });
	                if (lang_1.isPresent(_this.baseResponseOptions)) {
	                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
	                }
	                responseObserver.next(new static_response_1.Response(responseOptions));
	                responseObserver.complete();
	            };
	            var onError = function (error) {
	                if (_this.readyState === enums_1.ReadyStates.Cancelled)
	                    return;
	                _this.readyState = enums_1.ReadyStates.Done;
	                _dom.cleanup(script);
	                var responseOptions = new base_response_options_1.ResponseOptions({ body: error.message, type: enums_1.ResponseTypes.Error });
	                if (lang_1.isPresent(baseResponseOptions)) {
	                    responseOptions = baseResponseOptions.merge(responseOptions);
	                }
	                responseObserver.error(new static_response_1.Response(responseOptions));
	            };
	            script.addEventListener('load', onLoad);
	            script.addEventListener('error', onError);
	            _dom.send(script);
	            return function () {
	                _this.readyState = enums_1.ReadyStates.Cancelled;
	                script.removeEventListener('load', onLoad);
	                script.removeEventListener('error', onError);
	                if (lang_1.isPresent(script)) {
	                    _this._dom.cleanup(script);
	                }
	            };
	        });
	    }
	    JSONPConnection_.prototype.finished = function (data) {
	        // Don't leak connections
	        this._finished = true;
	        this._dom.removeConnection(this._id);
	        if (this.readyState === enums_1.ReadyStates.Cancelled)
	            return;
	        this._responseData = data;
	    };
	    return JSONPConnection_;
	})(JSONPConnection);
	exports.JSONPConnection_ = JSONPConnection_;
	var JSONPBackend = (function (_super) {
	    __extends(JSONPBackend, _super);
	    function JSONPBackend() {
	        _super.apply(this, arguments);
	    }
	    return JSONPBackend;
	})(interfaces_1.ConnectionBackend);
	exports.JSONPBackend = JSONPBackend;
	var JSONPBackend_ = (function (_super) {
	    __extends(JSONPBackend_, _super);
	    function JSONPBackend_(_browserJSONP, _baseResponseOptions) {
	        _super.call(this);
	        this._browserJSONP = _browserJSONP;
	        this._baseResponseOptions = _baseResponseOptions;
	    }
	    JSONPBackend_.prototype.createConnection = function (request) {
	        return new JSONPConnection_(request, this._browserJSONP, this._baseResponseOptions);
	    };
	    JSONPBackend_ = __decorate([
	        angular2_1.Injectable(), 
	        __metadata('design:paramtypes', [browser_jsonp_1.BrowserJsonp, base_response_options_1.ResponseOptions])
	    ], JSONPBackend_);
	    return JSONPBackend_;
	})(JSONPBackend);
	exports.JSONPBackend_ = JSONPBackend_;
	//# sourceMappingURL=jsonp_backend.js.map

/***/ },

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(17);
	var lang_1 = __webpack_require__(21);
	var _nextRequestId = 0;
	exports.JSONP_HOME = '__ng_jsonp__';
	var _jsonpConnections = null;
	function _getJsonpConnections() {
	    if (_jsonpConnections === null) {
	        _jsonpConnections = lang_1.global[exports.JSONP_HOME] = {};
	    }
	    return _jsonpConnections;
	}
	// Make sure not to evaluate this in a non-browser environment!
	var BrowserJsonp = (function () {
	    function BrowserJsonp() {
	    }
	    // Construct a <script> element with the specified URL
	    BrowserJsonp.prototype.build = function (url) {
	        var node = document.createElement('script');
	        node.src = url;
	        return node;
	    };
	    BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
	    BrowserJsonp.prototype.requestCallback = function (id) { return exports.JSONP_HOME + "." + id + ".finished"; };
	    BrowserJsonp.prototype.exposeConnection = function (id, connection) {
	        var connections = _getJsonpConnections();
	        connections[id] = connection;
	    };
	    BrowserJsonp.prototype.removeConnection = function (id) {
	        var connections = _getJsonpConnections();
	        connections[id] = null;
	    };
	    // Attach the <script> element to the DOM
	    BrowserJsonp.prototype.send = function (node) { document.body.appendChild((node)); };
	    // Remove <script> element from the DOM
	    BrowserJsonp.prototype.cleanup = function (node) {
	        if (node.parentNode) {
	            node.parentNode.removeChild((node));
	        }
	    };
	    BrowserJsonp = __decorate([
	        angular2_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], BrowserJsonp);
	    return BrowserJsonp;
	})();
	exports.BrowserJsonp = BrowserJsonp;
	//# sourceMappingURL=browser_jsonp.js.map

/***/ },

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(17);
	var static_request_1 = __webpack_require__(395);
	var enums_1 = __webpack_require__(398);
	var lang_1 = __webpack_require__(21);
	var exceptions_1 = __webpack_require__(177);
	var Rx = __webpack_require__(24);
	var Subject = Rx.Subject, ReplaySubject = Rx.ReplaySubject;
	/**
	 *
	 * Mock Connection to represent a {@link Connection} for tests.
	 *
	 **/
	var MockConnection = (function () {
	    function MockConnection(req) {
	        this.response = new ReplaySubject(1).take(1);
	        this.readyState = enums_1.ReadyStates.Open;
	        this.request = req;
	    }
	    /**
	     * Sends a mock response to the connection. This response is the value that is emitted to the
	     * {@link EventEmitter} returned by {@link Http}.
	     *
	     * ### Example
	     *
	     * ```
	     * var connection;
	     * backend.connections.subscribe(c => connection = c);
	     * http.request('data.json').subscribe(res => console.log(res.text()));
	     * connection.mockRespond(new Response('fake response')); //logs 'fake response'
	     * ```
	     *
	     */
	    MockConnection.prototype.mockRespond = function (res) {
	        if (this.readyState === enums_1.ReadyStates.Done || this.readyState === enums_1.ReadyStates.Cancelled) {
	            throw new exceptions_1.BaseException('Connection has already been resolved');
	        }
	        this.readyState = enums_1.ReadyStates.Done;
	        this.response.next(res);
	        this.response.complete();
	    };
	    /**
	     * Not yet implemented!
	     *
	     * Sends the provided {@link Response} to the `downloadObserver` of the `Request`
	     * associated with this connection.
	     */
	    MockConnection.prototype.mockDownload = function (res) {
	        // this.request.downloadObserver.onNext(res);
	        // if (res.bytesLoaded === res.totalBytes) {
	        //   this.request.downloadObserver.onCompleted();
	        // }
	    };
	    // TODO(jeffbcross): consider using Response type
	    /**
	     * Emits the provided error object as an error to the {@link Response} {@link EventEmitter}
	     * returned
	     * from {@link Http}.
	     */
	    MockConnection.prototype.mockError = function (err) {
	        // Matches XHR semantics
	        this.readyState = enums_1.ReadyStates.Done;
	        this.response.error(err);
	    };
	    return MockConnection;
	})();
	exports.MockConnection = MockConnection;
	/**
	 * A mock backend for testing the {@link Http} service.
	 *
	 * This class can be injected in tests, and should be used to override providers
	 * to other backends, such as {@link XHRBackend}.
	 *
	 * ### Example
	 *
	 * ```
	 * import {MockBackend, DefaultOptions, Http} from 'angular2/http';
	 * it('should get some data', inject([AsyncTestCompleter], (async) => {
	 *   var connection;
	 *   var injector = Injector.resolveAndCreate([
	 *     MockBackend,
	 *     provide(Http, {useFactory: (backend, defaultOptions) => {
	 *       return new Http(backend, defaultOptions)
	 *     }, deps: [MockBackend, DefaultOptions]})]);
	 *   var http = injector.get(Http);
	 *   var backend = injector.get(MockBackend);
	 *   //Assign any newly-created connection to local variable
	 *   backend.connections.subscribe(c => connection = c);
	 *   http.request('data.json').subscribe((res) => {
	 *     expect(res.text()).toBe('awesome');
	 *     async.done();
	 *   });
	 *   connection.mockRespond(new Response('awesome'));
	 * }));
	 * ```
	 *
	 * This method only exists in the mock implementation, not in real Backends.
	 **/
	var MockBackend = (function () {
	    function MockBackend() {
	        var _this = this;
	        this.connectionsArray = [];
	        this.connections = new Subject();
	        this.connections.subscribe(function (connection) { return _this.connectionsArray.push(connection); });
	        this.pendingConnections = new Subject();
	    }
	    /**
	     * Checks all connections, and raises an exception if any connection has not received a response.
	     *
	     * This method only exists in the mock implementation, not in real Backends.
	     */
	    MockBackend.prototype.verifyNoPendingRequests = function () {
	        var pending = 0;
	        this.pendingConnections.subscribe(function (c) { return pending++; });
	        if (pending > 0)
	            throw new exceptions_1.BaseException(pending + " pending connections to be resolved");
	    };
	    /**
	     * Can be used in conjunction with `verifyNoPendingRequests` to resolve any not-yet-resolve
	     * connections, if it's expected that there are connections that have not yet received a response.
	     *
	     * This method only exists in the mock implementation, not in real Backends.
	     */
	    MockBackend.prototype.resolveAllConnections = function () { this.connections.subscribe(function (c) { return c.readyState = 4; }); };
	    /**
	     * Creates a new {@link MockConnection}. This is equivalent to calling `new
	     * MockConnection()`, except that it also will emit the new `Connection` to the `connections`
	     * emitter of this `MockBackend` instance. This method will usually only be used by tests
	     * against the framework itself, not by end-users.
	     */
	    MockBackend.prototype.createConnection = function (req) {
	        if (!lang_1.isPresent(req) || !(req instanceof static_request_1.Request)) {
	            throw new exceptions_1.BaseException("createConnection requires an instance of Request, got " + req);
	        }
	        var connection = new MockConnection(req);
	        this.connections.next(connection);
	        return connection;
	    };
	    MockBackend = __decorate([
	        angular2_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], MockBackend);
	    return MockBackend;
	})();
	exports.MockBackend = MockBackend;
	//# sourceMappingURL=mock_backend.js.map

/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(17);
	var angular2_2 = __webpack_require__(17);
	var SocialButtons_1 = __webpack_require__(409);
	__webpack_require__(412);
	var css = __webpack_require__(421);
	var App = (function () {
	    function App() {
	    }
	    App.prototype.onInit = function () {
	        this.facebook = {
	            getLinksUrl: 'http://facebook.com',
	            icon: 'fa-facebook',
	            color: '#395A99'
	        };
	        this.twitter = {
	            getLinksUrl: 'http://twitter.com',
	            icon: 'fa-twitter',
	            color: '#55ACEF'
	        };
	        this.gplus = {
	            getLinksUrl: 'http://google.com',
	            icon: 'fa-google-plus',
	            color: '#F44336'
	        };
	    };
	    App = __decorate([
	        angular2_1.Component({
	            selector: 'app',
	            directives: [angular2_2.CORE_DIRECTIVES, SocialButtons_1.SocialButtons],
	            styles: [("" + css)],
	            template: "\n    <div class=\"main-app\">\n       <social-buttons [facebook]=\"facebook\" [twitter]=\"twitter\" [gplus]=\"gplus\"></social-buttons>\n    </div>\n    "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], App);
	    return App;
	})();
	exports.App = App;


/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(17);
	var angular2_2 = __webpack_require__(17);
	var css = __webpack_require__(410);
	var SocialButtons = (function () {
	    function SocialButtons() {
	        this.shareLink = function (socialNetwork) {
	            this.share_item_icon = socialNetwork.icon;
	            this.open_state = "roll";
	            this.share_text = "1.7K";
	            this.share_color = socialNetwork.color;
	            this.share_text_color = socialNetwork.color;
	        };
	    }
	    SocialButtons.prototype.onInit = function () {
	        this.share_item_icon = "fa-retweet";
	        this.open_state = "";
	        this.share_text = "Share";
	        this.share_color = "#617D8A";
	    };
	    SocialButtons = __decorate([
	        angular2_1.Component({
	            selector: 'social-buttons',
	            directives: [angular2_2.CORE_DIRECTIVES],
	            inputs: ['facebook', 'twitter', 'gplus'],
	            styles: [("" + css)],
	            template: "\n    <div class=\"social-button {{open_state}}\">\n        <a class=\"social-button__circle\" [style.background-color]=\"share_color\">\n            <i class=\"fa fa-fw {{share_item_icon}}\"></i>\n        </a>\n        <span class=\"social-button--text\" [style.background-color]=\"share_color\">\n            {{share_text}}\n        </span>\n        <ul class=\"share-list\">\n            <li class=\"share-list__item\">\n               <a (click)=\"shareLink(facebook)\" [style.background-color]=\"facebook.color\" class=\"facebook-link\">\n                <i class=\"fa {{facebook.icon}}\">\n\n                </i>\n               </a>\n            </li>\n            <li class=\"share-list__item\">\n               <a (click)=\"shareLink(twitter)\" [style.background-color]=\"twitter.color\" class=\"twitter-link\">\n                <i class=\"fa {{twitter.icon}}\">\n\n                </i>\n               </a>\n            </li>\n            <li class=\"share-list__item\">\n               <a (click)=\"shareLink(gplus)\" [style.background-color]=\"gplus.color\" class=\"google-link\">\n                <i class=\"fa {{gplus.icon}}\">\n\n                </i>\n               </a>\n            </li>\n        </ul>\n    </div>\n    "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SocialButtons);
	    return SocialButtons;
	})();
	exports.SocialButtons = SocialButtons;


/***/ },

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(411)();
	// imports
	
	
	// module
	exports.push([module.id, ".social-button {\n  position: relative;\n  text-transform: uppercase;\n  font-size: 11px;\n  font-family: 'Source Sans Pro', sans-serif;\n  display: inline-block;\n  width: 120px; }\n  .social-button .social-button__circle {\n    display: inline-block;\n    width: 50px;\n    height: 50px;\n    line-height: 50px;\n    font-size: 20px;\n    text-align: center;\n    border-radius: 100%;\n    color: white;\n    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.2);\n    z-index: 2;\n    position: absolute;\n    left: 0;\n    top: 10px;\n    -webkit-transition: all 0.5s ease;\n    -moz-transition: all 0.5s ease;\n    -o-transition: all 0.5s ease;\n    -ms-transition: all 0.5s ease;\n    transition: all 0.5s ease; }\n  .social-button.roll .social-button__circle {\n    animation-name: rollRight;\n    animation-duration: 500ms;\n    animation-iteration-count: 1;\n    animation-timing-function: linear;\n    animation-fill-mode: forwards; }\n    .social-button.roll .social-button__circle .fa {\n      animation-name: circle;\n      animation-duration: 500ms;\n      animation-iteration-count: 1;\n      animation-timing-function: linear;\n      animation-fill-mode: forwards; }\n  .social-button .social-button--text {\n    display: inline-block;\n    text-align: right;\n    height: 40px;\n    border-radius: 25px;\n    width: 80px;\n    padding-right: 20px;\n    color: white;\n    margin-left: -40px;\n    line-height: 40px;\n    z-index: 1;\n    top: -3px;\n    position: relative;\n    -webkit-transition: all 0.5s ease;\n    -moz-transition: all 0.5s ease;\n    -o-transition: all 0.5s ease;\n    -ms-transition: all 0.5s ease;\n    transition: all 0.5s ease;\n    overflow: hidden; }\n    .social-button .social-button--text:before {\n      content: \"\";\n      background: rgba(0, 0, 0, 0.3);\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      left: 0;\n      right: 0;\n      z-index: -1; }\n  .social-button.roll .social-button--text {\n    text-align: left;\n    padding-left: 20px;\n    padding-right: 0; }\n  .social-button:not(.roll):hover .share-list {\n    opacity: 1;\n    top: -45px;\n    -webkit-transform: scale(1); }\n\n.share-list {\n  display: inline-block;\n  margin-left: -140px;\n  padding: 0;\n  top: 20px;\n  position: relative;\n  opacity: 0;\n  -webkit-transform: scale(0.5);\n  -webkit-transition: all 0.5s ease;\n  -moz-transition: all 0.5s ease;\n  -o-transition: all 0.5s ease;\n  -ms-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n  .share-list .share-list__item {\n    display: inline-block;\n    width: 35px;\n    height: 35px;\n    float: left;\n    list-style: none;\n    overflow: hidden; }\n    .share-list .share-list__item a {\n      width: 35px;\n      height: 35px;\n      display: block;\n      line-height: 35px;\n      color: white;\n      font-size: 16px;\n      cursor: pointer;\n      position: relative;\n      z-index: 1; }\n      .share-list .share-list__item a .fa {\n        position: relative;\n        z-index: 1; }\n      .share-list .share-list__item a:before {\n        content: \" \"; }\n      .share-list .share-list__item a:hover:before {\n        background: rgba(0, 0, 0, 0.3);\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        z-index: 0; }\n    .share-list .share-list__item:first-child {\n      border-radius: 20px 0px 0px 20px; }\n    .share-list .share-list__item:last-child {\n      border-radius: 0 20px 20px 0; }\n\n@-webkit-keyframes rollRight {\n  0% {\n    -webkit-transform: translate(0px, 0); }\n  100% {\n    -webkit-transform: translate(70px, 0); } }\n\n@-moz-keyframes rollRight {\n  0% {\n    -webkit-transform: translate(0px, 0); }\n  100% {\n    -webkit-transform: translate(70px, 0); } }\n\n@-o-keyframes rollRight {\n  0% {\n    -webkit-transform: translate(0px, 0); }\n  100% {\n    -webkit-transform: translate(70px, 0); } }\n\n@keyframes rollRight {\n  0% {\n    -webkit-transform: translate(0px, 0); }\n  100% {\n    -webkit-transform: translate(70px, 0); } }\n\n@-webkit-keyframes circle {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@-moz-keyframes circle {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@-o-keyframes circle {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes circle {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n", ""]);
	
	// exports


/***/ },

/***/ 411:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 412:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 421:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(411)();
	// imports
	
	
	// module
	exports.push([module.id, ".main-app {\n  padding: 150px;\n  text-align: center;\n  font-family: 'Source Sans Pro', sans-serif; }\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=app.js.map