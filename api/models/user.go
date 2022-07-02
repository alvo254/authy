package models

type User struct {
	Id       int    `json:"id"`
	Name     string `json:"name" gorm:"unique"`
	Email    string `json:"email" gorm:"unique"`
	Password []byte `json:"-"`
}
