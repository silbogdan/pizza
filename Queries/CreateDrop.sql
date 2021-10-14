CREATE TABLE Order_Info (
	OrderId varchar(255) PRIMARY KEY NOT NULL,
	PizzaType varchar(255) NOT NULL,
	FirstName varchar(255),
	LastName varchar(255),
	Phone varchar(16) NOT NULL,
	Email varchar(255) NOT NULL,
	DeliveryAddress varchar(255) NOT NULL,
	Options varchar(255) NOT NULL
)
GO

DROP TABLE Order_Info
GO
