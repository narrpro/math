import Vue from 'vue'
import mysql from "mysql2"
import mysqlConfig from '../../mysqlConfig'
import store from '@/store'
// import router from '../router'

const DB = mysql.createConnection(mysqlConfig)