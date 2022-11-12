'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:
const $Promise = function(executor) {
    if (typeof executor !== 'function') throw new TypeError ('The executor must be a function!');
    this._state = 'pending';
    this._handlerGroups = [];
    executor(this._internalResolve.bind(this), this._internalReject.bind(this));
}

$Promise.prototype._internalResolve = function(value){
    if (this._state === 'pending') {
        this._state = 'fulfilled';
        this._value = value;
        this._callHandlers();
    }
}

$Promise.prototype._internalReject = function(reason){
    if (this._state === 'pending') {
        this._state = 'rejected';
        this._value = reason;
        this._callHandlers();
    }
}

$Promise.prototype._callHandlers = function(){
    while (this._handlerGroups.length) {
        //toma primer objeto del arreglo
        const hd = this._handlerGroups.shift();
        if (this._state === 'fulfilled') {
            if (hd.successCb) {
                try {
                    //guardamos la resolucion del CB
                    const result = hd.successCb(this._value);
                    //asegurarnos que una nueva promesa se retorno
                    if (result instanceof $Promise) {
                        // Handler devuelve una promesa
                        return result.then(
                            //CB resolve
                            (value) =>{
                                return hd.downstreamPromise._internalResolve(value);
                            },
                            //CB Reject
                            (error) =>{
                                return hd.downstreamPromise._internalReject(error);
                            }
                        );
                    } else { //si no es un promesa nueva
                        // Handler devolvió un valor
                        hd.downstreamPromise._internalResolve(result);
                    }
                } catch (error) {
                    // Handler arrojó un error/excepción
                    hd.downstreamPromise._internalReject(error)
                }
            } else {
                hd.downstreamPromise._internalResolve(this._value)
            }
        } else if (this._state === 'rejected') {
            if (hd.errorCb) {
                try {
                    //guardamos la resolucion del CB
                    const result = hd.errorCb(this._value);
                    //asegurarnos que una nueva promesa se retorno
                    if (result instanceof $Promise) {
                        return result.then(
                            //CB resolve
                            (value) =>{
                                return hd.downstreamPromise._internalResolve(value);
                            },
                            //CB Reject
                            (error) =>{
                                return hd.downstreamPromise._internalReject(error);
                            }
                        );
                    } else { //si no es un promesa nueva
                        hd.downstreamPromise._internalResolve(result);
                    }
                } catch (error) {
                    hd.downstreamPromise._internalReject(error)
                }
            } else {
                hd.downstreamPromise._internalReject(this._value)
            }
        }
    }
}

$Promise.prototype.then = function(successCb, errorCb) {
    if (typeof successCb !== 'function') successCb = false;
    if (typeof errorCb !== 'function') errorCb = false;

    const downstreamPromise  = new $Promise(() => {});

    this._handlerGroups.push({
        successCb,
        errorCb,
        downstreamPromise 
    });

    //Si el estado ya se resolvio
    if (this._state !== 'pending') this._callHandlers();
    return downstreamPromise ;
}

$Promise.prototype.catch = function(errorCb) {
    return this.then(null, errorCb);
}

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
