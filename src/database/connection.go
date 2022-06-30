package database

import (
	"../models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	connection, err := gorm.Open(mysql.Open("toor:Twende@1357@/authy"), &gorm.Config{})
	if err != nil {
		panic("could connect or find db")
	}

	DB = connection
	connection.AutoMigrate(&models.User{})
}
