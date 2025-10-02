# Must: import unittest library
import unittest

# Must: import 'webdriver' library
from selenium import webdriver

# TODO change the url
site_url = "http://localhost/is216/mini_labtest/test_student/q3/q3.html"


class RecipeTest(unittest.TestCase):
    def setUp(self):
        """Create ChromeDriver instance with blank page, wait policy of
        3 seconds and maximize the window"""

        # Initiate ChromeDriver instance
        # TODO change the location to where you installed chromedriver
        self.driver = webdriver.Chrome("c:/chromedriver/chromedriver.exe")

        self.driver.get(site_url)

        # Set default timeout for locating an element in the DOM (3 seconds)
        self.driver.implicitly_wait(3)

        # Maximize window
        self.driver.maximize_window()

    def check_recipe_name(self, correct_recipe):
        recipe_name_elem = self.driver.find_element_by_id("recipeName")
        self.assertEqual(recipe_name_elem.text, correct_recipe)
    
    def check_button_disabled(self, btnId):
        btn_prev_elem = self.driver.find_element_by_id(btnId)
        self.assertFalse(btn_prev_elem.is_enabled())

    def check_ingredients(self, correct_ingredients):
        ul_elem = self.driver.find_element_by_id("ingredientList")
        all_li = ul_elem.find_elements_by_tag_name("li")
        if len(all_li)>0:
            for i, li_elem in enumerate(all_li):
                self.assertEqual(li_elem.text, correct_ingredients[i])
        else:
            self.assertTrue(len(all_li)>0)

    def check_next_recipe(self, recipeName, ingredArr):
        self.driver.find_element_by_id("btnNext").click()
        self.check_recipe_name(recipeName)
        ingred_arr = ingredArr
        self.check_ingredients(ingred_arr)
    
    def check_prev_recipe(self, recipeName, ingredArr):
        self.driver.find_element_by_id("btnPrev").click()
        self.check_recipe_name(recipeName)
        ingred_arr = ingredArr
        self.check_ingredients(ingred_arr)

    def test_a_onload_recipe(self):
        self.check_recipe_name("Banana Smoothie")

    def test_b_onload_ingredients(self):
        print("Onload ingredients: 2 m")
        ingred_arr = [
            "2 bananas",
            "1/2 cup vanilla yogurt",
            "1/2 cup skim milk",
            "2 teaspoons honey",
            "pinch of cinnamon",
        ]
        self.check_ingredients(ingred_arr)

    def test_d_load_next_recipe(self):
        print("Load next ingredients: 1 m")
        self.check_next_recipe("Spaghetti", ["Noodles", "Tomato Sauce", "Meatballs"])
        self.check_next_recipe("Split Pea Soup", ["1 pound split peas", "1 onion", "6 carrots", "4 ounces of ham"])
        
        
    def test_e_next_btn_disabled(self):
        print("Last next button disabled: 0.5 m")
        self.driver.find_element_by_id("btnNext").click()
        self.driver.find_element_by_id("btnNext").click()
        btn_next_elem = self.driver.find_element_by_id("btnNext")
        self.assertFalse(btn_next_elem.is_enabled())
        
    def test_f_load_prev_recipe(self):
        print("Load prev ingredients: 1 m")
        self.check_next_recipe("Spaghetti", ["Noodles", "Tomato Sauce", "Meatballs"])
        self.check_prev_recipe("Banana Smoothie", ["2 bananas", "1/2 cup vanilla yogurt", "1/2 cup skim milk", "2 teaspoons honey", "pinch of cinnamon"])
        
    
    def test_g_prev_btn_disabled(self):
        print("First prev button disabled: 0.5 m")
        btn_prev_elem = self.driver.find_element_by_id("btnPrev")
        self.assertFalse(btn_prev_elem.is_enabled())

    def tearDown(cls):
        """Close ChromeDriver"""
        cls.driver.quit()


if __name__ == "__main__":
    unittest.main()
