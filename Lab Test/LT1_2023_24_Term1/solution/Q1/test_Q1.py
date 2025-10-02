# Must: import unittest library
import unittest

# Must: import 'webdriver' library
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains

# TODO change the url
site_url = "http://localhost/is216/mini_labtest/test_student/q1/q1.html"


class Q1Test(unittest.TestCase):
    def setUp(self):
        """Create ChromeDriver instance with blank page, wait policy of
        3 seconds and maximize the window"""

        # Initiate ChromeDriver instance
        # TODO change the location to where you installed chromedriver
        self.driver = webdriver.Chrome("e:/chromedriver/chromedriver.exe")

        self.driver.get(site_url)

        # Set default timeout for locating an element in the DOM (1 seconds)
        self.driver.implicitly_wait(1)

        # Maximize window
        self.driver.maximize_window()

    def test_a_header_color(self):
        header_elem = self.driver.find_element_by_id("header")
        print("header bgcolor: 0.5 m")
        self.assertEqual(header_elem.value_of_css_property("background-color"), "rgba(21, 28, 85, 1)")
        print("header color: 0.5 m")
        self.assertEqual(header_elem.value_of_css_property("color"), "rgba(255, 255, 255, 1)")
    
    def test_b_header_padding(self):
        print("header padding: 1 m")
        header_elem = self.driver.find_element_by_id("header")
        self.assertEqual(header_elem.value_of_css_property("padding-top"), "10px")
        self.assertEqual(header_elem.value_of_css_property("padding-bottom"), "10px")
        self.assertEqual(header_elem.value_of_css_property("padding-left"), "2px")
        self.assertEqual(header_elem.value_of_css_property("padding-right"), "2px")
        
    def test_c_header_ul(self):
        print("header ul margin left: 1 m")
        header_ul_elem = self.driver.find_element(By.CSS_SELECTOR, "#header ul")
        self.assertEqual(header_ul_elem.value_of_css_property("margin-left"), "150px")
        
    def test_d_header_ul_li(self):
        print("header ul li display inline: 1 m")
        header_ul_li_elem = self.driver.find_element(By.CSS_SELECTOR, "#header ul li")
        self.assertTrue("inline" in header_ul_li_elem.value_of_css_property("display"))
        
    def test_e_header_ul_li_a(self):
        print("header ul li a padding: 0.5 m")
        header_ul_li_a_elem = self.driver.find_element(By.CSS_SELECTOR, "#header ul li a")
        self.assertEqual(header_ul_li_a_elem.value_of_css_property("padding-top"), "10px")
        self.assertEqual(header_ul_li_a_elem.value_of_css_property("padding-bottom"), "10px")
        self.assertEqual(header_ul_li_a_elem.value_of_css_property("padding-left"), "30px")
        self.assertEqual(header_ul_li_a_elem.value_of_css_property("padding-right"), "30px")
        
    def test_f_header_ul_li_a_color(self):
        print("header ul li a color: 0.5 m")
        header_ul_li_a_elem = self.driver.find_element(By.CSS_SELECTOR, "#header ul li a")
        self.assertEqual(header_ul_li_a_elem.value_of_css_property("color"), "rgba(255, 255, 255, 1)")

    def test_green_span(self):
        print("span free bgcolor color: 0.5 m")
        span_elem = self.driver.find_element(By.CSS_SELECTOR, "span")
        self.assertEqual(span_elem.value_of_css_property("background-color"), "rgba(0, 128, 0, 1)")
        self.assertEqual(span_elem.value_of_css_property("color"), "rgba(255, 255, 255, 1)")
    
    def test_green_free(self):
        print("free class bgcolor color: 0.5 m")
        free_elem = self.driver.find_element(By.CSS_SELECTOR, ".free")
        self.assertEqual(free_elem.value_of_css_property("background-color"), "rgba(0, 128, 0, 1)")
        self.assertEqual(free_elem.value_of_css_property("color"), "rgba(255, 255, 255, 1)")
        
    def test_h_table(self):
        print("table single line: 0.5 m")
        table_elem = self.driver.find_element(By.CSS_SELECTOR, "table")
        self.assertEqual(table_elem.value_of_css_property("border-collapse"), "collapse")
        
    def test_h_table_th(self):
        th_elem = self.driver.find_element(By.CSS_SELECTOR, "th")
        print("table th padding: 0.5 m")
        self.assertEqual(th_elem.value_of_css_property("padding-top"), "15px")
        self.assertEqual(th_elem.value_of_css_property("padding-bottom"), "15px")
        self.assertEqual(th_elem.value_of_css_property("padding-left"), "10px")
        self.assertEqual(th_elem.value_of_css_property("padding-right"), "10px")
        print("table th text align left: 1 m")
        self.assertEqual(th_elem.value_of_css_property("text-align"), "left")
    


    def tearDown(cls):
        """Close ChromeDriver"""
        cls.driver.quit()


if __name__ == "__main__":
    unittest.main()
