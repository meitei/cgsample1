# coding: utf-8
require 'thinreports'
require 'time'
require 'date'
require 'RMagick'
require 'open-uri'

class ReportController < ApplicationController

  def report

  end
end


def number_format(value)
  value.to_s.reverse.gsub(/(\d{3})(?=\d)/,'\1,').reverse
end
