"use strict";
{

	var pickerData = [
		{
			text: "One",
			value: 1
		},
		{
			text: "Two",
			value: 2
		},
		{
			text: "Three",
			value: 3
		},
		{
			text: "Four",
			value: 4
		},
		{
			text: "Five",
			value: 5
		},
		{
			text: "Six",
			value: 6
		},
		{
			text: "Seven",
			value: 7
		},
		{
			text: "Eight",
			value: 8
		},
		{
			text: "Nine",
			value: 9
		},
		{
			text: "Ten",
			value: 10
		},
		{
			text: "Eleven",
			value: 11
		},
		{
			text: "Twelve",
			value: 12
		},
		{
			text: "Thirteen",
			value: 13
		},
		{
			text: "Fourteen",
			value: 14
		},
		{
			text: "Fifteen",
			value: 15
		},
		{
			text: "Sixteen",
			value: 16
		},
		{
			text: "Seventeen",
			value: 17
		},
		{
			text: "Eighteen",
			value: 18
		},
		{
			text: "Ninteen",
			value: 19
		},
		{
			text: "Twenty",
			value: 20
		},
	];


	var pickerHtml = document.querySelector("#ui-picker");

	var uiPicker = uiPicker(pickerHtml, {
		data: pickerData,
		visibleNos: 5,
		itemHeight: 35
	});
	uiPicker.getLength();

}