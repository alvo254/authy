package controllers

import (
	"../database"
	"../models"
	"github.com/gofiber/fiber"
	"golang.org/x/crypto/bcrypt"
)

func Register(c *fiber.Ctx) error {
	//Return data form post request
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}
	//go.dev to find go packages
	password, _ := bcrypt.GenerateFromPassword([]byte(data["password"]), 14)
	user := models.User{
		Name:     data["name"],
		Email:    data["email"],
		Password: password,
	}
	database.DB.Create(&user)

	return c.JSON(user)

}
