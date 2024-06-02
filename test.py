class Product():


    def __init__(self, name, price) -> None:
        self._name = name
        self._price = price 
#    GETTTER
    @property
    def price(self):
        return self._price
# SETTER
    @price.setter
    def price(self, price):
        self._price = price
    # def get_price(self):
    #     return self._price   
    # def set_price(self, price):
    #     self._price = price


# descripters

# they are publicly available!
# to make them private u use one underscore
bread = Product("bread", 65)

print(bread.price)
bread._price = 109
print(bread._price)
# print(bread.get_price())
# print(bread.set_price(90))
# print(bread.get_price())
