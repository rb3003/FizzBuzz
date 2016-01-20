'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /FizzBuzz when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/FizzBuzz");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/FizzBuzz');
    });


    it('should render FizzBuzz when user navigates to /FizzBuzz', function() {
      expect(element.all(by.css('p')).first().getText()).
        toMatch(/Enter any number:/);
    });

    it('should render Fizz when user enters 6', function() {
      element(by.model('formModel.inputtedValue')).sendKeys('6');
      var button = element(by.id('submit'));
      button.click();
      var elem = element(by.xpath("//label[contains(text(), 'Fizz')]"));

      browser.wait(protractor.ExpectedConditions.presenceOf(elem), 5000);
      expect(elem.isPresent()).toEqual(true);
    });

    it('should render Buzz when user enters 10', function() {
      element(by.model('formModel.inputtedValue')).sendKeys('10');
      var button = element(by.id('submit'));
      button.click();
      var elem = element(by.xpath("//label[contains(text(), 'Buzz')]"));

      browser.wait(protractor.ExpectedConditions.presenceOf(elem), 5000);
      expect(elem.isPresent()).toEqual(true);
    });

    it('should render FizzBuzz when user enters 15', function() {
      element(by.model('formModel.inputtedValue')).sendKeys('15');
      var button = element(by.id('submit'));
      button.click();
      var elem = element(by.xpath("//label[contains(text(), 'FizzBuzz')]"));

      browser.wait(protractor.ExpectedConditions.presenceOf(elem), 5000);
      expect(elem.isPresent()).toEqual(true);
    });

    it('should render 16 when user enters 16', function() {
      element(by.model('formModel.inputtedValue')).sendKeys('16');
      var button = element(by.id('submit'));
      button.click();
      var elem = element(by.xpath("//label[contains(text(), '16')]"));

      browser.wait(protractor.ExpectedConditions.presenceOf(elem), 5000);
      expect(elem.isPresent()).toEqual(true);
    });

  });


});
