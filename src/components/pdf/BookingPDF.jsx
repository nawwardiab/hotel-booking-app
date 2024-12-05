import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    width: 120,
    fontWeight: 'bold',
  },
  value: {
    flex: 1,
  },
});

const BookingPDF = ({ bookingDetails }) => {
  // Format dates to strings
  const checkInDate = bookingDetails?.checkIn instanceof Date 
    ? bookingDetails.checkIn.toLocaleDateString()
    : 'N/A';
    
  const checkOutDate = bookingDetails?.checkOut instanceof Date
    ? bookingDetails.checkOut.toLocaleDateString()
    : 'N/A';

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Booking Confirmation</Text>
        
        <View style={styles.section}>
          <Text style={{ fontSize: 14, marginBottom: 10 }}>
            Booking ID: {bookingDetails?.bookingId || 'N/A'}
          </Text>

          <View style={styles.row}>
            <Text style={styles.label}>Hotel:</Text>
            <Text style={styles.value}>{bookingDetails?.hotelName || 'N/A'}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Room Type:</Text>
            <Text style={styles.value}>{bookingDetails?.roomType || 'N/A'}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Check-in:</Text>
            <Text style={styles.value}>{checkInDate}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Check-out:</Text>
            <Text style={styles.value}>{checkOutDate}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Total Amount:</Text>
            <Text style={styles.value}>
              ${((bookingDetails?.roomTotal || 0) * 1.1).toFixed(2)}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={{ fontSize: 10, color: '#666', textAlign: 'center' }}>
            Thank you for choosing our service!
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default BookingPDF; 